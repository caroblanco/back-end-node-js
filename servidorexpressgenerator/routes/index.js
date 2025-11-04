var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ruta2', function(req, res, next) {
  res.send('Hola, mundo desde Express! (ruta2)');
})

module.exports = router;
