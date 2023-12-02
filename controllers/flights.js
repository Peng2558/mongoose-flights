const Flight = require('../models/flight');
module.exports = {
    index,
    new:newFlight,
    create
  };
  async function index(req, res) {
 const flights = await Flight.find({});
 res.render('/flights/index', { title: 'All Flights', flights });
//   res.render('flights/index', {
//    title: 'All Flights'
 //});
  }


   function newFlight (req,res){
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });

  }

async function create(req, res) {
  console.log(req.body);
    try {
      const flight = await Flight.create(req.body);
     // res.redirect(`/flights/${flight._id}`);
      res.redirect('/flights');
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }