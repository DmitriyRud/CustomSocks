const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req)
  res.render('index');
});

router.get('/constructor', (req, res) => {
  res.render('constructor/main');
});

module.exports = router;
