const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
var cors = require('cors');
const keys = requiere('./config/keys');

mongoose.connect(keys.mongoConnection);

mongoose.connect('mongodb://admin:admin1234@ds337985.mlab.com:37985/bedu_final', { useNewUrlParser: true });

const app = express();
app.use(cors(bodyParser.json()));

app.get('/api/pagos', (req, res) => {
    res.send('1234');
});

// require('./routes/peopleRoutes')(app);
const ruta = require('./routes/pagosRoutes');
ruta(app);

// Configuration for heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);