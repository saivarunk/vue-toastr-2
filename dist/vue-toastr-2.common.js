/*!
 * vue-toastr-2 v0.0.5 
 * (c) 2017 Varun
 * Released under the MIT License.
 */
'use strict';

var toastr = require('toastr');

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  if (options) {
    toastr.options = options;
  }
  Vue.prototype.$toastr = {};
  Vue.prototype.$toastr.warning = function (message, title, optionsOverride) {
    if ( message === void 0 ) message = '';
    if ( title === void 0 ) title = '';
    if ( optionsOverride === void 0 ) optionsOverride = {};

    toastr.warning(message, title, optionsOverride);
  };
  Vue.prototype.$toastr.success = function (message, title, optionsOverride) {
    if ( message === void 0 ) message = '';
    if ( title === void 0 ) title = '';
    if ( optionsOverride === void 0 ) optionsOverride = {};

    toastr.success(message, title, optionsOverride);
  };
  Vue.prototype.$toastr.error = function (message, title, optionsOverride) {
    if ( message === void 0 ) message = '';
    if ( title === void 0 ) title = '';
    if ( optionsOverride === void 0 ) optionsOverride = {};

    toastr.error(message, title, optionsOverride);
  };
  Vue.prototype.$toastr.info = function (message, title, optionsOverride) {
    if ( message === void 0 ) message = '';
    if ( title === void 0 ) title = '';
    if ( optionsOverride === void 0 ) optionsOverride = {};

    toastr.info(message, title, optionsOverride);
  };
  Vue.prototype.$toastr.remove = function () {
    toastr.remove();
  };
  Vue.prototype.$toastr.clear = function () {
    toastr.clear();
  };
}

plugin.version = '0.0.5';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
