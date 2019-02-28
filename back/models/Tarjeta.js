const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarjetaSchema = new Schema({
    id: Number,
	cuenta: String,
	pin: Number,
    fechaVencimiento: String,
    alias: String
});

mongoose.model('tarjetas', tarjetaSchema);