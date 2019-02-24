
const mongoose = require('mongoose');
require('../models/Pagos');
const Pago = mongoose.model('pagos');

module.exports = (app) => {

	app.get('/api/pagos', async (req, res) => {
        try {
            const response = await Pago.find({});
            res.send(response);
        } catch (error) {
            console.log('error api pagos');
            res.send(error.message);
        }
	})};



