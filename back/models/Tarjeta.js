const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarjetaSchema = new Schema({
    id: Number,
	cuenta: String,
	pin: Number,
    fechaVencimiento: Date,
    alias: String
});

mongoose.model('tarjetas', tarjetaSchema);