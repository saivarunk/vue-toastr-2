/* global toastr:true*/
/* eslint no-undef: "error"*/

import './jquery.min.js'
import './toastr.min.js'

function plugin (Vue, options = {}) {
  if (options) {
    toastr.options = options
  }
  Vue.prototype.$toastr = {}
  Vue.prototype.$toastr.warning = (message = '', title = '', optionsOverride = {}) => {
    toastr.warning(message, title, optionsOverride)
  }
  Vue.prototype.$toastr.success = (message = '', title = '', optionsOverride = {}) => {
    toastr.success(message, title, optionsOverride)
  }
  Vue.prototype.$toastr.error = (message = '', title = '', optionsOverride = {}) => {
    toastr.error(message, title, optionsOverride)
  }
  Vue.prototype.$toastr.info = (message = '', title = '', optionsOverride = {}) => {
    toastr.info(message, title, optionsOverride)
  }
  Vue.prototype.$toastr.remove = () => {
    toastr.remove()
  }
  Vue.prototype.$toastr.clear = () => {
    toastr.clear()
  }
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
