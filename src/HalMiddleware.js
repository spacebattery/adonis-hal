'use strict';

class HalMiddleware {
  * handle (request, response, next) {
    yield next;
  }
}

module.exports = HalMiddleware;
