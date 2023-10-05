var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// all mfs will start with /skills


router.get('/', skillsCtrl.index);

module.exports = router;

//gang