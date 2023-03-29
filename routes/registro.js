var express = require('express');
const RegistroController = require('../controllers/RegistroController');
var router = express.Router();

/*Metodo Post registro*/
router.post('/create', RegistroController.CreateRegi);

module.exports = router;