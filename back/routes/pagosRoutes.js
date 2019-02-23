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
            // const response = await Pago.find({}).select({ servicio: 1 }); // trae todo los servicios pagados
            // const response = await Pago.find({})
            //                            .select({ 
            //                                _id: 0,
            //                                'servicio.nombre': 1, 
            //                                'servicio.importe': 1,
            //                                'servicio.tipo': 1
            //                             }); // trae el detalle de servicios pagados
            // const response = await Pago.aggregate(
            //     [
            //       { 
            //           $group : { 
            //               _id: "$id_tarjeta" ,
            //               total: { $sum: '$total' }
            //             } 
            //       }
            //     ]
            //  ); // trae el total de pago por tarjeta


            // const response = await Pago.aggregate(
            //     [
            //       { 
            //           $group : { 
            //               _id: { tarjeta: "$id_tarjeta", servicio: "$servicio.nombre" },
            //               sum: { $sum: '$servicio.importe'}
            //             } 
            //       }
            //     ]
            //  );
             const response = await Pago.aggregate(
                [
                  {
                    $group : {
                        _id: { tarjeta: "$id_tarjeta" , nombre: '$servicio.nombre', importe: '$servicio.importe' },
                        sum: { $sum: '$servicio.importe' }
                    } 
                  },
                //   {
                //     $project: {
                //         'servicio.nombre': 0
                //     }
                //   }
                ]
             );

            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
	});

};
