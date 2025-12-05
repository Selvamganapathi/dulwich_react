import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

function Footer({ sectionRefs, isVisible, availableSchools, selectedSchool, setSelectedSchool, setSelectedSchoolSlug }) {
  return (
    <footer c
      ref={(el) => (sectionRefs.current['footer'] = el)}
      className={`bg-[#000000] text-white transition-all duration-1000`}
    >
      {/* Top Section */}
      <div className="border-b border-gray-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left - Logo and School Name */}
            <div className="flex items-center gap-4">
              <img
                src="/images/crest-logo.svg"
                alt="Dulwich College"
                className="h-16 w-16"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h2 className="text-base font-semibold">
                  DULWICH COLLEGE | SHANGHAI PUDONG |
                </h2>
                <p className="text-sm text-gray-300">上海德威外籍人员子女学校（浦东）</p>
              </div>
            </div>

            {/* Right - School Selector */}
            {availableSchools && availableSchools.length > 0 && (
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium mb-2">Our Schools</label>
                <select
                  value={selectedSchool}
                  onChange={(e) => {
                    const school = availableSchools.find(s => `Dulwich College ${s.title}` === e.target.value);
                    if (school) {
                      const schoolName = e.target.value;
                      setSelectedSchool(schoolName);
                      setSelectedSchoolSlug(school.slug);
                      // Save to localStorage to remember the selection
                      localStorage.setItem('selectedSchoolSlug', school.slug);
                      localStorage.setItem('selectedSchoolName', schoolName);
                    }
                  }}
                  className="w-full md:w-72 px-4 py-2 bg-white text-gray-900 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D30013]"
                >
                  {availableSchools.map((school) => (
                    <option key={school.id} value={`Dulwich College ${school.title}`}>
                      Dulwich College {school.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1 - Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-4">General Enquiries</h3>
            <a href="mailto:admissions@dulwich-shanghai.cn" className="text-gray-300 hover:text-white transition-colors block mb-6">
              admissions@dulwich-shanghai.cn
            </a>

            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-2">Main Campus</h4>
              <p className="text-sm text-gray-300">
                266 Lan An Road, Jinqiao, Pudong 201206
              </p>
              <p className="text-sm text-gray-300">
                T: (8621) 3896 1200
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Kindergarten</h4>
              <p className="text-sm text-gray-300">
                425 Lan An Road, Jinqiao, Pudong 201206
              </p>
              <p className="text-sm text-gray-300">
                T: (8621) 3896 1300
              </p>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#careers" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-sm text-gray-300 hover:text-white transition-colors">
                  School Calendar
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact School
                </a>
              </li>
              <li>
                <a href="#safeguarding" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Safeguarding
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#sitemap" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - External Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">External Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#parent-portal" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Parent Portal
                </a>
              </li>
              <li>
                <a href="#founding-school" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Founding School
                </a>
              </li>
              <li>
                <a href="#education-in-motion" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Education In Motion
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - QR Code and Social Media */}
          <div>
            <div className="mb-6">
              <div className="bg-white p-4 inline-block rounded">
                <div className="w-32 h-32 flex items-center justify-center text-gray-900 text-xs">
                  QR Code
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-300">小红书</span>
              <span className="text-sm text-gray-300">微信</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#youtube" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#facebook" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2025 Dulwich College International. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
