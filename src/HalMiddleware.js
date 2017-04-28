'use strict';

class HalMiddleware {
  constructor (use) {
    const Response = use('Adonis/Src/Response');
    Response.macro('json', function (json) {
      this.json(json);
    });
  }

  * handle (request, response, next) {
    yield next;
  }
}

module.exports = HalMiddleware;
