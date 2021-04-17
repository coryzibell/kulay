
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (colors) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

  var MersenneTwister = require('mersennetwister');
  new MersenneTwister();

  class Kulay {
    constructor() {
      this.pair = colors__default['default'];
      console.log(this.pair);
    }
  }

  var Kulay$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Kulay
  });

  kul = new Kulay$1();

}(colors));
