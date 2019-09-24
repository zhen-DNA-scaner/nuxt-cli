# xy-manage

> Xiaoyue administrator system

Base on [Nuxt.js](https://zh.nuxtjs.org/guide) and [sass](https://www.sass.hk/).

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Extend Catelog

```
APP
├─ assets
|  └── css
|      └── variables.scss       // global css variables & mixin
├─ directive                    // vue directive
├─ filters                      // vue filters
├─ plugins
|  ├── axios.js                 // axios interceptor
|  └── global.js                // global attributes & methods
└─ utils
   ├── funlib.js                // custom function library
   └── storage.js               // packaged storage to be like $storage.set() or $storage.get() method
```