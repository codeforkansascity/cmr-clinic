// content of nuxt.config.generate.js file
module.exports = {
  ...require('./nuxt.config'),
  ...{
    env: {
        client_key: 4,
        baseURL: 'http://pdb-cmr-backend.test'
    },
    axios: {
        baseURL: 'http://pdb-cmr-backend.test'
    },
  }

}

