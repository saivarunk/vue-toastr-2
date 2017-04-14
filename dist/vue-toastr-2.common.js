/*!
 * vue-toastr-2 v0.0.4 
 * (c) 2017 Varun
 * Released under the MIT License.
 */
'use strict';

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

module.exports = plugin;
