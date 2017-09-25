var express = require('express'),
    actions = require('../methods/actions');
var router = express.Router();

router.post('/authenticate', actions.authenticate);
router.post('/addnumber', actions.addNumber);

module.exports=router;