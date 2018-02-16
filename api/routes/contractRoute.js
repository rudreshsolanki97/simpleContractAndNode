var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller.js");
var controller_contract = require("../controllers/controller_contract.js");
/* GET home page. */

router.post('/createNewAccount',controller.createNewAccount);
router.post('/unlockAccount',controller.unlockAccount);

router.post('/transfer',controller_contract.transfer);
router.post('/viewBalance',controller_contract.viewBalance);
//router.post('/')



module.exports = router;
