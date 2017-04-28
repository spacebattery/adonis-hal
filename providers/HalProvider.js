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
  * register () {
    this.app.singleton('Adonis/Resp/Hal', function (app) {
      const HalMiddleware = require('../src/HalMiddleware');
      return new HalMiddleware(app.use);
    });
  }
}

module.exports = HalProvider;
