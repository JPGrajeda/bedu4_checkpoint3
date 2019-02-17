const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: String,
    price: String
    });
module.exports = mongoose.model('servicios', ServiceSchema);