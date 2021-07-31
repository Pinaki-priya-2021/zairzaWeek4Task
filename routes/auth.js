const express = require('express');
const router=express.Router();
const Controller=require('../controller/mail');

router.post('/result' , Controller.result);
console.log("sent to Controller.result");
module.exports = router;