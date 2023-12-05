const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
   
    create
 
  };
   
  async function create(req,res){
  
    try {
       
        await Ticket.create(req.body);
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {

        console.error(err);
       
    }
  }
 