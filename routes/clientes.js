var express = require('express');
const Usercontroller = require('../controllers/Usercontroller');
var router = express.Router();

/* GET users listing. */
router.post('/create', Usercontroller.createUser);
router.get('/getclientes', Usercontroller.getclientes);
router.post('/login', Usercontroller.login);

module.exports = router;