// Development API endpoint configuration.
//
//     npm run dev
//
// See package.json
//
module.exports = {
  ...require('./nuxt.config'),
  ...{
    env: {
        client_key: 4,
        baseURL: 'https://cmr-dev-api.codeforkc.org'
    },
    axios: {
        baseURL: 'https://cmr-dev-api.codeforkc.org'
    },
  }

}

