var knex = require('knex')({
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
module.exports = knex