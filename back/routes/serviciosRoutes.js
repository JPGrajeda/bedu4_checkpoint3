const mongoose = require('mongoose');
require('../models/servicios');
const Servicios = mongoose.model('servicios');

module.exports = (app) => {

	app.get('/api/servicios', async (req, res) => {
        try {
            const response = await Servicios.find({});
            res.send(response);
        } catch (error) {
            console.log('error api Servicios');
            res.send(error.message);
        }
	});

};