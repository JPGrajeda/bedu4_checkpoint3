const mongoose = require('mongoose');
const { Schema } = mongoose;


const pagosSchema = new Schema({
    fecha: Number,
    idTarjeta: Number,
    total: Number,
    servicio: {
        ids: Number,
        cantidad: Number,
        nombre: String,
        importe: Number,
        tipo: String
    }
});

mongoose.model('pagos', pagosSchema);

