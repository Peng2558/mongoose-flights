var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', flightsCtrl.create);

module.exports = router