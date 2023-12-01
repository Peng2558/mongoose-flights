const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
     type: String,
     enum: ['American','SouthWest','United'],
     required: false ,
     required: false ,
     default: 'n/a'
    },
  airport: {

    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN'],
    required: false ,
    default: 'DEN'


  },
  flightNo: {

    type: Number,
    required: true ,
    min:10,
    max:9999,
    default: 'n/a'

  },
  departs: {

    type: Date,
    default: function() {
    let now = new Date();
     now.setFullYear(now.getFullYear() + 1);
     return now;
   }

  }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);