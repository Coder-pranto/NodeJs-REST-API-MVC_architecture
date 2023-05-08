const mongoose = require('mongoose');
const config = require('./config');

const dbURL = config.db.url;


mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('> Connected Successfully... '))
  .catch((err) => {
    console.log(`> Error while connecting to mongoDB : ${err.message}`);
    process.exit(1);
  });
