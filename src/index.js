const toastr = require('toastr')

function plugin (Vue, options = {}) {
  Vue.prototype.$toastr.warning = (message) => {
    toastr.warning(message)
  }
  Vue.prototype.$toastr.success = (message) => {
    toastr.success(message)
  }
  Vue.prototype.$toastr.error = (message) => {
    toastr.error(message)
  }
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
