# nuxt-ssr-example

> An example application using Nuxt for SSR from an RESTful API.

## HTML Style Guide
[GoCardless HTML Style Guide](https://github.com/gocardless/html-style-guide).

## HTML Class Style Guide
This Tachyons design pattern allows developers to see which elements are being changed from mobile (small screens) to larger screens.
``` HTML
<div class='[ small screen ][ not-small screen ][ medium screen ][ large screen ]'></div>
<div class='[ w-100 pa2 ][ w-50-ns pa0-ns ph1-ns ][][ w-10-l ]'></div>
```

Additionally, to easily read what has changed for each screen size, it is recommended to order class names by their purpose, going form structural elements to cosmetic, and then class names relevant to child elements.
``` HTML
<div class='[ fixed left-0 top-0 vw-100 pa1 white bg-black flex flex-row items-centered ]'></div>
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
