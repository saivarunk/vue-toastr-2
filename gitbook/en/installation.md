# Installation

### Direct Download / CDN

https://unpkg.com/vue-toastr-2/dist/vue-toastr-2

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-toastr-2@0.0.0/dist/vue-toastr-2.js

Include vue-toastr-2 after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-toastr-2/dist/vue-toastr-2.js"></script>
```

### NPM

    $ npm install vue-toastr-2

### Yarn

    $ yarn add vue-toastr-2

When used with a module system, you must explicitly install the `vue-toastr-2` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueToastr2 from 'vue-toastr-2'

Vue.use(VueToastr2)
```

You don't need to do this when using global script tags.

### Dev Build

You will have to clone directly from GitHub and build `vue-toastr-2` yourself if
you want to use the latest dev build.

    $ git clone https://github.com/saivarunk/vue-toastr-2.git node_modules/vue-toastr-2
    $ cd node_modules/vue-toastr-2
    $ npm install
    $ npm run build
