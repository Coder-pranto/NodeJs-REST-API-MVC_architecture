const app = require('./app');
const chalk = require('chalk');
const port = process.env.PORT || 5000;
const color=chalk.cyan.bgWhite.bold.underline.italic;


app.listen(port , ()=> console.log('> Server is up and running on port : '+color(`http://localhost:${port} `)))
