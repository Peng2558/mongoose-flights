const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
   
    create
 
  };
   
  async function create(req,res){
  
    try {
             
        const flight = await Flight.findById(req.params.id);
        req.body.flight = req.params.id;   
        await Ticket.create(req.body);
        console.log(req.body)
        res.redirect(`/flights/${flight._id}`);
    }
    catch (err) {
        console.error(err);
       
    }

  
  }
 