var express = require('express');
var users = require('../controllers/users');

var router = express.Router();
/* GET users listing. */
router.get('/', users.index);
router.get('/2', users.index2);

module.exports = router;
