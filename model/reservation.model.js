var mongoose = require('mongoose');
var reservationSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    emailId : String,
    gender : String,
    from : Date,
    to : Date,
    numberOfTickets : Number,
    age : Number
   });
   module.exports.Consumer = mongoose.model('Consumer', reservationSchema);