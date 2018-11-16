require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

if (!process.env.NODE_ENV || !process.env.PORT) {
  console.error(
    'ENV variables are missing.',
    'Verify that you have set them directly or in a .env file.',
  );
  process.exit(1);
} else {
  console.log('Using ENV variables');
}

const app = express();
const port = process.env.PORT || 6666;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

const server = app.listen(port, () => console.log(`Listening on: ${port}`));

module.exports = server;
