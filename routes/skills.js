var express = require('express');
var router = express.Router();

/* GET /skills */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

router.post('/', todosCtrl.create);





module.exports = router;
