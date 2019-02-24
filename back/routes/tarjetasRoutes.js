const mongoose = require('mongoose');
require('../models/Tarjetas');
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
	})};
