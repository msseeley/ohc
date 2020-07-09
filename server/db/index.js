const { Pool } = require('pg');
const db = new Pool({
  connectionString: 'postgres://localhost:5432/ohc',
});

module.exports = db;
