const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const destinationSchema = new Schema({
 
  airport: {

    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    default: 'DEN'

   },
 
  arrival: {

   type: Date
  
  }
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
     type: String,
     enum: ['American','SouthWest','United']    
    // default: 'n/a'
    },
  airport: {

    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    default: 'DEN'

  },
  flightNo: {

    type: Number,
    required: true ,
    min:10,
    max:9999
  },
  departs: {

   type: Date,
   default: () => {
   const oneYear = new Date()
   oneYear.setFullYear(oneYear.getFullYear() + 1)
   return oneYear
  
   }
  
  },
  destinations :[destinationSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);