const pool = require('./db'); // Import the pool

const queryDatabase = async () => {
  try {
    // Example query
    const res = await pool.query('SELECT NOW()');
    console.log('Database Time:', res.rows[0]);
  } catch (err) {
    console.error('Error executing query:', err.stack);
  } finally {
    await pool.end(); // Close the connection pool
  }
};