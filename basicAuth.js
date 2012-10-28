var http = require('http'),
    httpProxy = require('http-proxy');

module.exports = function (basicAuth) {

  return function (request, response, next) {
      request.headers['Authentication'] = "Basic " + basicAuth;
      next();
  }
}
