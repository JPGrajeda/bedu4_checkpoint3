const mongoose = require('mongoose');
require('../models/Pago');
const Pago = mongoose.model('pagos');

module.exports = (app) => {

    // GET ALL PAGOS
	app.get('/api/pagos', async (req, res) => {
        try {
            const response = await Pago.find({});
            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
	});

    // GET PAGOS POR TIPO
    app.get('/api/pagosTipo', async (req, res) => {
        try {
            // const response = await Pago.find({}).select({ servicio: 1 });
            // const response = await Pago.find({})
            //                            .select({ 
            //                                _id: 0,
            //                                'servicio.nombre': 1, 
            //                                'servicio.importe': 1,
            //                                'servicio.tipo': 1
            //                             });
            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
	});

};
