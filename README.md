# vue-cv

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run client

# serve with hot reload at localhost:5000
npm run server

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Heroku configuration for using dev dependencies
``` bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false -a ldvcv
```

## How to setup nodemailer for using gmail (Oauth2)
[https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one](https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one)

[live demo](https://ldvcv.herokuapp.com/)