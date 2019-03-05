const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicioSchema = new Schema({
    id: Number,
	nombre: String,
	tipo: String,
    precio: Number,
    foto: String   
});

mongoose.model('servicios', servicioSchema);