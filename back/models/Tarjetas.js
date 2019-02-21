const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarjetasSchema = new Schema({
    id: Number,
	cuenta: String,
	pin: Number,
    fechaVencimiento: Date,
    alias: String
});

mongoose.model('tarjetas', tarjetasSchema);