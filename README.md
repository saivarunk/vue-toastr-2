# vue-toastr-2

[![npm](https://img.shields.io/npm/v/vue-toastr-2.svg)](https://www.npmjs.com/package/vue-toastr-2)
[![npm](https://img.shields.io/npm/dm/vue-simple-upload.svg)](https://www.npmjs.com/package/vue-toastr-2)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![BuildStatus](https://secure.travis-ci.org/saivarunk/vue-toastr-2.png?branch=master)](https://travis-ci.org/saivarunk/vue-toastr-2)

Simple toast notifications for Vue.js

# Installation

### Direct Download / CDN

https://unpkg.com/vue-toastr-2/dist/vue-toastr-2

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-toastr-2@0.0.0/dist/vue-toastr-2.js

Include vue-toastr-2 after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-toastr-2/dist/vue-toastr-2.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-toastr-2/dist/vue-toastr-2.min.css">
```

### NPM

These dependencies are required to use vue-toastr-2 while using npm

- jquery
- toastr

```
$ npm install jquery
$ npm install toastr
$ npm install vue-toastr-2
```
### Yarn

```
$ yarn add jquery
$ yarn add toastr
$ yarn add vue-toastr-2
```
When used with a module system, you must explicitly install the `vue-toastr-2` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

window.toastr = require('toastr')

Vue.use(VueToastr2)
```

You don't need to do this when using global script tags.

# Usage

The notifications can be triggered from the components using this.$toastr property.

For documentation of options, look at [toastr](https://www.npmjs.com/package/toastr)

## Success

```javascript
this.$toastr.success('Message', 'Title', options);
```

## Error

```javascript
this.$toastr.error('Message', 'Title', options);
```

## Warning

```javascript
this.$toastr.warning('Message', 'Title', options);
```

## info

```javascript
this.$toastr.info('Message', 'Title', options);
```

### Dev Build

You will have to clone directly from GitHub and build `vue-toastr-2` yourself if
you want to use the latest dev build.

    $ git clone https://github.com/saivarunk/vue-toastr-2.git node_modules/vue-toastr-2
    $ cd node_modules/vue-toastr-2
    $ npm install
    $ npm run build

## :scroll: Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/saivarunk/vue-toastr-2/blob/master/CHANGELOG.md).


## :exclamation: Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/saivarunk/vue-toastr-2/blob/master/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## :muscle: Contribution
Please make sure to read the [Contributing Guide](https://github.com/saivarunk/vue-toastr-2/blob/master/CONTRIBUTING.md) before making a pull request.

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
