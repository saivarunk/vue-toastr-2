/*!
 * vue-toastr-2 v0.0.4 
 * (c) 2017 Varun
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueToastr2 = factory());
}(this, (function () { 'use strict';

var toastr = require('toastr');

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  Vue.prototype.$toastr = {};
  Vue.prototype.$toastr.warning = function (message) {
    toastr.warning(message);
  };
  Vue.prototype.$toastr.success = function (message) {
    toastr.success(message);
  };
  Vue.prototype.$toastr.error = function (message) {
    toastr.error(message);
  };
}

plugin.version = '0.0.4';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

return plugin;

})));
