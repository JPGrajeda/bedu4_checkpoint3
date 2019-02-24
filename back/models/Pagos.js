const mongoose = require('mongoose');
const { Schema } = mongoose;


const pagosSchema = new Schema({
    fecha: Number,
    id_tarjeta: Number,
    total: Number,
    servicio: {
        id_servicio: Number,
        cantidad: Number,
        nombre: String,
        importe: Number,
        tipo: String
    }
});

mongoose.model('pagos', pagosSchema);


