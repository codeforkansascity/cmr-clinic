# Developer INSTALL

## Quick Install

1. Fork the project https://github.com/codeforkansascity/cmr-clinic
2. Clone from your Forked copy
3. Install and Run

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
This will use `https://cmr-dev-api.codeforkc.org/api` as the end point for the data.


## Using Local API

If you need to adjust the back end you will need to do the following

1. Install https://github.com/codeforkansascity/cmr-clinic-admin-api
2. Setup the local build to look at your local install of cmr-clinic-admin-api

```
cp nuxt.config.local.example.js nuxt.config.local.js
```
3. Change nuxt.config.local.js, the following is an example and will vary on the URL for your local install.

```
// Local API endpoint configuration.  
//
//     npm run local
//
// See package.json
//
module.exports = {
  ...require('./nuxt.config'),
  ...{
    env: {
        client_key: 4,
        baseURL: 'http://cmr-clinic-backend.test'
    },
    axios: {
        baseURL: 'http://cmr-clinic-backend.test'
    },
  }

}
```

4. dRun the app using the local API install

```
npm run local
```
