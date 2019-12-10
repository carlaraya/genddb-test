var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('files/index');
});

router.get('/upload', function(req, res, next) {
  res.render('files/upload');
});

module.exports = router;
