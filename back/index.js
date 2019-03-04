const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://admin:admin123@ds337985.mlab.com:37985/bedu_final');

const app = express();
var cors = require('cors')
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

require('./routes/pagosRoutes')(app);
require('./routes/tarjetasRoutes')(app);

// Configuration for heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front', 'build', 'index.html'));
    });
}

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// app.configure(function() {
//     app.use(allowCrossDomain);
//     //some other code
// }); 





app.listen(process.env.PORT || 5000);