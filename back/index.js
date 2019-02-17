const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/api/algo', (req, res) => {
    res.send('1234');
});

// require('./routes/peopleRoutes')(app);

// Configuration for heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../front', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);