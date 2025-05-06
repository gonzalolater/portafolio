const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      proxy({
        target: 'https://main--portfolio-aguilar-gonzalo-daniel.netlify.app/',
        changeOrigin: true,
      })
    );
  };
