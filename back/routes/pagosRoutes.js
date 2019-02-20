
const mongoose = require('mongoose');
const axios = requiere('axios');

require('../models/pago');
const pago = mongoose.model('pago');

module.exports = (app) => {
    var url = 'https://localhost:3000';
    var pago = {username: 'admon'};
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(pago), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.handleErrors('Error:', error))
    .then(response => console.log('Success:', response));

    

function handleErrors(response) {
    if (!response.ok) throw Error(response.status);
    return response;
}

fetch("API URL")
    // handle network err/success
    .then(handleErrors)
    // use response of network on fetch Promise resolve
    .then(response => console.log("ok") )
    // handle fetch Promise error
    .catch(error => console.log(error) );


};




