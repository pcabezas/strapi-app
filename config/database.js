const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'db',
      port: 5432,
      database: 'strapi_db',
      user: 'postgres',
      password: 'postgres'

    },
    useNullAsDefault: true,
  },
});
