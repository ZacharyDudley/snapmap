const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('../Routes');
const app = express();
const db = require('../db')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is listening.')
  db.sync()
  .then(() => {
    console.log('DB is Synced.')
  })
  .catch(err => {
    console.error('There\'s been an error:', err, err.stack);
  })
})
