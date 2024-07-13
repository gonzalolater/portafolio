const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      proxy({
        target: 'https://polite-ground-030dc3103.4.azurestaticapps.net/',
        changeOrigin: true,
      })
    );
  };