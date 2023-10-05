var express = require('express');
var router = express.Router();

/* GET /skills */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', skillsCtrl.show);







module.exports = router;
