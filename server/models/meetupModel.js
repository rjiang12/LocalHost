const { Pool } = require('pg');

const PG_URI = 'postgres://rcwvxixj:QoMsDTMRQyrIxkI_ZfWPvUvHwdifXLt4@heffalump.db.elephantsql.com/rcwvxixj';

const pool = new Pool({
  connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};