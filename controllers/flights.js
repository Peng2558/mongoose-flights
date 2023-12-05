const Flight = require('../models/flight');
module.exports = {
    index,
    show,
    new:newFlight,
    create 
  };
  async function index(req, res) {
    const flights = await Flight.find({});
    flights.forEach(flight => {
        if (flight.departs) {
          const date = new Date(flight.departs);
          flight.formattedDeparts = date.toISOString().slice(0, 16);
        }
      });
    res.render('flights/index', { title: 'All Flights', flights });
 
  }

  async function show(req, res) {
   
    const flight = await Flight.findById(req.params.id)  
  
     if (flight.departs) {
       
        const departsDate = new Date(flight.departs);
        flight.formattedDeparts = departsDate.toISOString().slice(0, 16);
        flight.isPast = departsDate < new Date();
      }
    res.render('flights/show', { title: 'Flight Details', flight });
   
  }
   function newFlight (req,res){
   
   res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
   
  }

async function create(req, res) {
 
    try {
     const flight = await Flight.create(req.body);
     res.redirect(`/flights/${flight._id}`);
      //res.redirect('/flights');
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }
 