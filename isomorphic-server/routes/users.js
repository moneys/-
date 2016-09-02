var express = require('express');
var users = require('../controllers/users');
var router = express.Router();
/* GET users listing. */
router.get('/', users.index);

module.exports = router;
