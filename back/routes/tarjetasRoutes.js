const mongoose = require('mongoose');

require('../models/Tarjetas');
const Tarjetas = mongoose.model('tarjetas');

module.exports = (app) => {

	app.get('/api/tarjetas', async (req, res) => {
        try {
            const response = await Tarjetas.find({});
            res.send(response);
        } catch (error) {
            console.log('error api tarjetas');
            res.send(error.message);
        }
	});

};
