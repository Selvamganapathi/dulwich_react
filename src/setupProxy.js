const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dulwich-ai-chat.atalent.xyz',
      changeOrigin: true,
      secure: true,
      timeout: 120000, // 2 minutes timeout
      proxyTimeout: 120000,
      onProxyReq: function(proxyReq, req, res) {
        // Add CORS headers for all requests
        proxyReq.setHeader('Accept', 'application/json');
        proxyReq.setHeader('Content-Type', 'application/json');
        console.log('Proxying request to:', proxyReq.path);
      },
      onProxyRes: function(proxyRes, req, res) {
        // Add CORS headers to response
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Accept, Authorization';
        console.log('Received response with status:', proxyRes.statusCode);
      },
      onError: function(err, req, res) {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error: ' + err.message);
      }
    })
  );
};
