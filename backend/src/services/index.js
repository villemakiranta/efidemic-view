const infections = require('./infection/infection.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(infections);
};
