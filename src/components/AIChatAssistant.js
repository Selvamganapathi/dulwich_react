import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// Sparkle Icon Component
const SparkleIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 28 24" fill="#D30013" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/>
    <path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
  </svg>
);

// Header Sparkle Icon Component
const HeaderSparkleIcon = () => (
  <svg className="w-[24px] h-[24px]" viewBox="0 0 28 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/>
    <path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
  </svg>
);

// Send Icon Component (Paper Plane)
const SendIcon = () => (
  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

function AIChatAssistant({
  chatOpen,
  setChatOpen,
  chatMessages,
  setChatMessages,
  chatMessage,
  setChatMessage,
  handleSendMessage,
  chatMessagesEndRef,
  selectedSchoolSlug
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState([
    'Contact Admissions Team',
    'Fees',
    'Book a tour',
    'Eligibility',
    'Academic Results'
  ]);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  // Get browser locale
  const getLocale = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.split('-')[0]; // Get 'en' from 'en-US', 'zh' from 'zh-CN', etc.
  };

  // Function to call the Dulwich AI Chat API
  const callDulwichAPI = async (question, school = null, locale = null) => {
    try {
      setIsLoading(true);

      // Use proxy in development, direct URL in production
      const API_ENDPOINT = process.env.NODE_ENV === 'development'
        ? '/api/vector/ask'
        : 'https://dulwich-ai-chat.atalent.xyz/api/vector/ask';

      // Build request body
      const requestBody = {
        question
      };

      // Add optional parameters if provided
      if (school) {
        requestBody.school = school;
      }
      if (locale) {
        requestBody.locale = locale;
      }

      console.log('API Request:', API_ENDPOINT, requestBody);

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      console.log('API Response:', data);

      // Extract the assistant's message content - try multiple formats
      const assistantMessage = data.answer ||
        data.assistant?.choices?.[0]?.message?.content ||
        'I apologize, but I could not find an answer to your question. Please try rephrasing or contact our admissions team.';

      // Extract selected_chunks (can be in qdrant_raw.selected_chunks or selected_chunks)
      const selectedChunks = data.selected_chunks || data.qdrant_raw?.selected_chunks || [];

      // Extract related questions from qdrant_search
      if (data.qdrant_search && Array.isArray(data.qdrant_search)) {
        const relatedQuestions = data.qdrant_search
          .map(item => item.payload?.title)
          .filter(Boolean);
        if (relatedQuestions.length > 0) {
          setAvailableQuestions(relatedQuestions);
        }
      }

      return { message: assistantMessage, selectedChunks };
    } catch (error) {
      console.error('Error calling Dulwich AI API:', error);
      return {
        message: 'I apologize, but I encountered an error. Please try again or contact our admissions team directly.',
        selectedChunks: []
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sending message with API integration
  const handleSendWithAPI = async () => {
    if (!chatMessage.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: chatMessage
    };

    setChatMessages(prev => [...prev, userMessage]);
    const currentQuestion = chatMessage;
    setChatMessage('');

    // Get locale
    const locale = getLocale();

    // Call API and get response with school and locale
    const { message: botResponse, selectedChunks } = await callDulwichAPI(
      currentQuestion,
      selectedSchoolSlug,
      locale
    );

    // Add bot message with selected chunks
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: botResponse,
      selectedChunks: selectedChunks
    };
    setChatMessages(prev => [...prev, botMessage]);
  };

  // Handle quick action buttons
  const handleQuickAction = async (text) => {
    const msg = {
      id: Date.now(),
      type: 'user',
      text: text
    };
    setChatMessages(prev => [...prev, msg]);

    // Get locale
    const locale = getLocale();

    // Call API and get response with school and locale
    const { message: botResponse, selectedChunks } = await callDulwichAPI(
      text,
      selectedSchoolSlug,
      locale
    );

    // Add bot message with selected chunks
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: botResponse,
      selectedChunks: selectedChunks
    };
    setChatMessages(prev => [...prev, botMessage]);
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Parse HTML from selected_chunks
  const parseChunkHTML = (chunk) => {
    try {
      if (chunk.html) {
        const parsed = JSON.parse(chunk.html);
        return parsed.copy || '';
      }
      return '';
    } catch (e) {
      return chunk.html || '';
    }
  };

  return (
    <>
      {/* AI Chat Container - Full Page Modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#f5f5f5] flex flex-col">
          {/* Chat Header */}
          <div className="bg-white px-4 lg:px-6 py-4 lg:py-6 border-b border-[#e5e5e5] relative">
            <button
              onClick={() => setChatOpen(false)}
              className="absolute top-4 lg:top-6 right-4 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#333]" />
            </button>
            <div className="text-center max-w-3xl mx-auto pr-8 lg:pr-0">
              <div className="flex items-center justify-center gap-2 lg:gap-3 mb-1 lg:mb-2">
                <div className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #9E1422 0%, #D30013 100%)' }}>
                  <HeaderSparkleIcon />
                </div>
                <h3 className="text-[18px] lg:text-[24px] font-semibold text-[#333] m-0">Dulwich AI Assistant</h3>
              </div>
              <p className="text-[10px] lg:text-[14px] text-[#666] m-0">
                Prefer to talk with a human? Find your local <a href="#admissions" className="text-[#D30013] underline font-medium hover:text-[#9E1422]">Admissions Team</a>
              </p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto px-4 lg:px-6 py-4 lg:py-8 bg-[#f5f5f5] min-h-0">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 lg:gap-6">
              {chatMessages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' ? (
                    // Bot Message
                    <div className="flex flex-col gap-1 lg:gap-2 max-w-[90%] lg:max-w-[85%]">
                      {/* Bot Icon and Label */}
                      <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9E1422 0%, #D30013 100%)' }}>
                          <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 2L10.5 7L15.5 8L10.5 9L9.5 14L8.5 9L3.5 8L8.5 7L9.5 2Z"/>
                          </svg>
                        </div>
                        <span className="text-[11px] lg:text-[13px] font-medium text-[#333]">Dulwich AI Assistant</span>
                      </div>

                      {/* Message Content */}
                      <div className="bg-white rounded-2xl px-4 py-3 lg:px-5 lg:py-4 shadow-sm">
                        <div
                          className="text-[13px] lg:text-[14px] leading-[1.6] lg:leading-[1.7] text-[#333] prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: message.text }}
                        />

                        {/* Timestamp */}
                        <div className="text-[10px] lg:text-[11px] text-[#999] mt-1.5 lg:mt-2 flex items-center gap-1">
                          {formatTime(message.id)}
                          <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // User Message
                    <div className="flex flex-col items-end max-w-[75%] lg:max-w-[70%]">
                      <div className="bg-[#3d3d3d] text-white rounded-2xl px-4 py-2.5 lg:px-5 lg:py-3 shadow-sm">
                        <p className="text-[13px] lg:text-[14px] leading-[1.5] lg:leading-[1.6] m-0">{message.text}</p>
                      </div>
                      <div className="text-[10px] lg:text-[11px] text-[#999] mt-1">{formatTime(message.id)}</div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex flex-col gap-1 lg:gap-2">
                    <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9E1422 0%, #D30013 100%)' }}>
                        <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.5 2L10.5 7L15.5 8L10.5 9L9.5 14L8.5 9L3.5 8L8.5 7L9.5 2Z"/>
                        </svg>
                      </div>
                      <span className="text-[11px] lg:text-[13px] font-medium text-[#333]">Dulwich AI Assistant</span>
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 lg:px-5 lg:py-4 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#9E1422] rounded-full animate-bounce" style={{ animationDuration: '0.6s' }}></div>
                        <div className="w-2 h-2 bg-[#9E1422] rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 bg-[#9E1422] rounded-full animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatMessagesEndRef} />
            </div>
          </div>

          {/* Chat Footer */}
          <div className="bg-white px-4 lg:px-6 py-4 lg:py-6 border-t border-[#e5e5e5]">
            <div className="max-w-4xl mx-auto">
              {/* Quick Actions with Header */}
              {availableQuestions.length > 0 && (
                <div className="mb-3 lg:mb-4">
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {(showAllQuestions ? availableQuestions : availableQuestions.slice(0, 10)).map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(question)}
                        disabled={isLoading}
                        className="text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-[11px] lg:text-[13px] font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(135deg, #9E1422 0%, #D30013 50%, #D30013 100%)' }}
                      >
                        {question}
                      </button>
                    ))}
                    {availableQuestions.length > 10 && (
                      <button
                        onClick={() => setShowAllQuestions(!showAllQuestions)}
                        disabled={isLoading}
                        className="bg-white border-2 border-[#D30013] px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-[11px] lg:text-[13px] text-[#D30013] font-medium hover:bg-[#f8f8f8] hover:shadow-sm transition-all duration-200 disabled:opacity-50"
                      >
                        {showAllQuestions ? 'Show Less' : 'See more prompts +'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Input Container */}
              <div className="flex gap-2 lg:gap-3 items-center bg-[#f5f5f5] border border-[#e0e0e0] rounded-xl px-3 py-2.5 lg:px-4 lg:py-3 transition-all duration-200 focus-within:border-[#D30013]/40 focus-within:shadow-sm">
                <button
                  className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-[#666] hover:text-[#D30013] transition-colors flex-shrink-0"
                  aria-label="Attach file"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !isLoading) {
                      handleSendWithAPI();
                    }
                  }}
                  placeholder="Message"
                  disabled={isLoading}
                  className="flex-1 border-none bg-transparent py-1 text-[13px] lg:text-[14px] text-[#333] outline-none focus:outline-none focus:ring-0 placeholder:text-[#999]"
                />
                <button
                  onClick={handleSendWithAPI}
                  disabled={isLoading || !chatMessage.trim()}
                  className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-md lg:hover:shadow-xl lg:transform lg:hover:scale-110 lg:active:scale-95"
                  style={{
                    background: isLoading || !chatMessage.trim()
                      ? '#e0e0e0'
                      : '#D30013'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading && chatMessage.trim() && window.innerWidth >= 1024) {
                      e.currentTarget.style.background = '#9E1422';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading && chatMessage.trim()) {
                      e.currentTarget.style.background = '#D30013';
                    }
                  }}
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AIChatAssistant;
