var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller.js");
/* GET home page. */

router.post('/createNewAccount',controller.createNewAccount);
router.post('/unlockAccount',controller.unlockAccount);
router.post('/transfer',controller.transfer);
router.post('/viewBalance',controller.viewBalance);


module.exports = router;
