const { time } = require('console');
const mongoose = require('mongoose');

const Schemas = mongoose.Schema;

const userSchemas = new Schemas({
    state: String,
    city: String,
    pickup: String,
    drop: String,
    pickupt: String,
    dropt: String,
    firstname: String,
    lastname: String,
    phone: Number,
    email: String,
    gender: String
});

module.exports = mongoose.model('bookingdetails', userSchemas, 'BookingData');