const mongoose = require('mongoose');
require('../models/Tarjeta');
const Tarjeta = mongoose.model('tarjetas');

module.exports = (app) => {
	app.get('/api/tarjetas', async (req, res) => {
        try {
            const response = await Tarjeta.find({});
            res.send(response);
        } catch (error) {
            console.log('error api tarjetas');
            res.send(error.message);
        }
	});

    app.post('/api/tarjetas', async (req, res) => {
        try {
            var card = new Tarjeta();
            card.cuenta = req.body.cuenta;
            card.pin= req.body.pin;
            card.fechaVencimiento= req.body.fechaVencimiento;
            card.alias=req.body.alias ;
            await card.save();
            res.send({ message: 'trjeta creada!' });
        } catch (error) {
            console.log('error api tarjetas');
            res.send(error.message);
        }
	});
};
