const mongoose = require('mongoose');
const { Schema } = mongoose;

const pagoSchema = new Schema({
    fecha: Date,
    id_tarjeta:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tarjetas'},
    total: Number,
	servicio: [{
        id_servicio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicios'},
		cantidad: Number,
        nombre: String,
        importe: Number,
        tipo: String
	}]
});

mongoose.model('pagos', pagoSchema);