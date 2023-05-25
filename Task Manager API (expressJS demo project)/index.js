const express = require('express');
const app = express();
const router = require('./routes/routes');
const connectDB = require('./config/database');

require('dotenv').config();
const port = process.env.PORT || 5000;
const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/TaskManager';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/tasks', router);

//default route
app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

//route error
app.use((req, res, next) => {
  res.status(404).json({ Message: 'route not found' });
});

//handling server side error(custom error handling)
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'something is broke' });
});

const startConnection = async () => {
  try {
    await connectDB(URI);
    app.listen(port, () =>
      console.log('> Server is up and running on port : ' + port + ' ')
    );
  } catch (error) {
    //console.log(error);
    console.error(`Error:${error.message} `);
  }
};

startConnection();
