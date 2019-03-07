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
    
    app.post('/api/pagos', async (req, res) => {
        try {
            console.log(req.body);

            console.log(req.body);
            let fecha = req.body.fecha;
            let tarjeta = req.body.tarjeta;
            let total = req.body.total;
            console.log(fecha);
            console.log(tarjeta);
            console.log(total);

            var pago = new Pago();
            pago.fecha = fecha,
            pago.id_tarjeta = tarjeta,
            pago.total = total,
            // pago.servicio = req.body.servicio[0]
            await pago.save();
            res.send({ message: 'Pago creado!' });
        } catch (error) {
            console.log('error api tarjetas');
            res.send(error.message);
        }
    });

    // GET PAGOS POR SERVICIO
    app.get('/api/pagosServicio/:idTarjeta', async (req, res) => {
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

            let idTarjeta = req.params.idTarjeta;
            // agrupa sercivicios por tarjeta y su total
             const response = await Pago.aggregate(
                [ 
                    {
                        $match : {'id_tarjeta': idTarjeta}
                    },
                    {   
                        $unwind:'$servicio'
                    },
                    {
                        $group : {
                            _id: '$servicio.nombre' ,
                            importe: { 
                                $sum: '$servicio.importe' 
                            }
                        } 
                    }
                ]
             );

            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
    });
    

    app.get('/api/pagosTipo/:idTarjeta', async (req, res) => {
        try {

            let idTarjeta = req.params.idTarjeta;
            
            // agrupa sercivicios por tarjeta y su total
             const response = await Pago.aggregate(
                [ 
                    {
                        $match : {'id_tarjeta': idTarjeta}
                    },
                    {   
                        $unwind:'$servicio'
                    },
                    {
                        $group : {
                            _id: '$servicio.tipo' ,
                            importe: { 
                                $sum: '$servicio.importe' 
                            }
                        } 
                    }
                ]
             );

            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
	});

};
