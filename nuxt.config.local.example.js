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
        baseURL: 'http://cmr-clinic-admin-api.test'
    },
    axios: {
        baseURL: 'http://cmr-clinic-admin-api.test'
    },
  }

}

