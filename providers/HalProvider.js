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
  boot () {
    const Response = use('Adonis/Src/Response');
    Response.macro('hal', function (json) {
      this.json(json);
    });
  }

  * register () {
    this.app.singleton('Adonis/Resp/Hal', () => undefined);
  }
}

module.exports = HalProvider;
