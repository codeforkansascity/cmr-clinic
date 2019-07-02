// content of nuxt.config.generate.js file
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

