## angulartics-ahoy

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Ahoy plugin for [Angulartics](http://github.com/angulartics/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-ahoy
```

Then add `angulartics.ahoy` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-ahoy')
]);
```

### bower

```shell
bower install angulartics-ahoy
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-ahoy/dist/angulartics-ahoy.min.js"></script>
```

Then add `angulartics.ahoy` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.ahoy'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-ahoy.svg
[npm-url]: https://npmjs.org/package/angulartics-ahoy
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-ahoy.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-ahoy
[bower-image]: https://img.shields.io/bower/v/angulartics-ahoy.svg
[bower-url]: http://bower.io/search/?q=angulartics-ahoy
[dep-status-image]: https://img.shields.io/david/mooyoul/angulartics-ahoy.svg
[dep-status-url]: https://david-dm.org/mooyoul/angulartics-ahoy
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
