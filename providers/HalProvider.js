'use strict';

/**
 * adonis-hal
 *
 * (c) Zaro Megagenta <zaro.megagenta@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const ServiceProvider = require('adonis-fold').ServiceProvider;

class HalProvider extends ServiceProvider {
  * boot () {
    const Response = this.app.use('Adonis/Src/Response');
    const HalTransformer = this.app.use('Adonis/Resp/Hal');
    yield HalTransformer.transform('a');
    Response.macro('hal', function (json) {
      this.json(json);
    });
  }

  * register () {
    this.app.singleton('Adonis/Resp/Hal', function (app) {
      const HalMiddleware = require('../src/HalMiddleware');

      return new HalMiddleware();
    });
  }
}

module.exports = HalProvider;
