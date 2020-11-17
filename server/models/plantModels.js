const { Pool } = require('pg');

const URI = (process.env.NODE_ENV === 'test') ? process.env.TESTING_URI : process.env.PG_URI;
// const URI = 'postgres://mdvdrqmh:6eJ62w0Hoj-iwvEGZzw0UT3aDOWD_GPS@ruby.db.elephantsql.com:5432/mdvdrqmh';

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
