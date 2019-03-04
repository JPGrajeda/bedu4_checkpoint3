const mongoose = require('mongoose');
require('../models/Servicio');
const Servicio = mongoose.model('servicios');

module.exports = (app) => {
	app.get('/api/servicios', async (req, res) => {
        try {
            const response = await Servicio.find({});
            res.send(response);
        } catch (error) {
            console.log('error api tarjetas');
            res.send(error.message);
        }
	});
};
