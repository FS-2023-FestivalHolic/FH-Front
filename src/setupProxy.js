const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.34.177.220:8083',
      changeOrigin: true,
    }),
  );
};