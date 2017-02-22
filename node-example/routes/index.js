var express = require('express');
var router = express.Router();
var tweets = require('../public/javascripts/tweets');
var students = require(__dirname + '/tweets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tweets */
router.get('/tweets', function(req, res, next) {
  res.json(tweets);
})

/* GET students */
router.get('/students', function(req, res, next) {
  res.json(students);
});

module.exports = router;
