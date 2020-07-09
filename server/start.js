const app = require('./app');
const db = require('./db');
const initializeVoteTable = require('./db/initializeVoteTable');

const port = 3000;
app.listen(port, async () => {
  try {
    await db.connect();
    console.log('db connected');
    await initializeVoteTable();
    console.log('vote table created');
    console.log(`started server on ${port}`);
  }
  catch (error) {
    console.error(error);
  }
});
