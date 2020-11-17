const { Pool } = require('pg');

const URI = (process.env.NODE_ENV === 'testing') ? process.env.testing_URI : process.env.PG_URI;

const pool = new Pool({
  connectionString: URI,
});

// schema can be found in models/SQL/plantInfoCreate.sql

module.exports = {
  query: (text, params, callback) =>
    // console.log('executed query', text);
    pool.query(text, params, callback)
  ,
};
