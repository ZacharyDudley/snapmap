const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('Outline.html');
})

module.exports = router;
