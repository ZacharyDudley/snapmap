const express = require('express');
const router = express.Router();
const apiRouter = require('./api')

// router.get('/', function (req, res) {
//   res.render('index.html');
// })

router.use('/api', apiRouter)

module.exports = router;
