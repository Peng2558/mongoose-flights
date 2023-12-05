var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


//router.get('/flights/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;
