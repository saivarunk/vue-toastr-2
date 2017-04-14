const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vue-toastr-2@[\d.]+.[\d]+\/dist\/vue-toastr-2\.js/,
    'https://unpkg.com/vue-toastr-2@' + pack.version + '/dist/vue-toastr-2.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
