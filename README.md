[![CircleCI](https://circleci.com/gh/shuta13/vue-tsx-keyframes.svg?style=svg)](https://circleci.com/gh/shuta13/vue-tsx-keyframes)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/shuta13/vue-tsx-keyframes/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/vue-tsx-keyframes.svg)](https://badge.fury.io/js/vue-tsx-keyframes)

# vue-tsx-keyframes
![](https://github.com/shuta13/vue-tsx-keyframes/blob/master/public/logo.png)

> library of keyframes as CSS in JS with using [vue-tsx-support](https://github.com/wonderful-panda/vue-tsx-support)

## Usage
Create vue-cli project, and install [vue-tsx-support](https://github.com/wonderful-panda/vue-tsx-support)

Install from npm:
```shell
yarn add -D vue-tsx-keyframes # npm install --save-dev vue-tsx-keyframes
```

In your `.tsx` file, add `@keyframes` enclosed backquote
```javascript
data() {
  return {
    horizontalFrame: `
      @keyframes horizontal {
        0% {
          transform:translateX(-8px);
        }
        100% {
          transform:translateX(8px);
        }
      }
    `
  };
}
```

Import `vue-tsx-keyframes`
```javascript
import keyframes from "vue-tsx-keyframes";
```

Add `keyframes` in `mounted()`
```javascript
mounted() {
  keyframes(this.horizontalFrame);
}
```

Sample : <https://github.com/shuta13/vue-tsx-sample/blob/master/src/components/CssInJs.tsx>