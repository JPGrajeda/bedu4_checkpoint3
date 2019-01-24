const express = require('express');
const app = express();
const port = 3005;
var cors = require('cors')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://admin:admin123@ds119772.mlab.com:19772/checkpoint3';
const Service = require('./models/serviceModel');
mongoose.connect(url, { useNewUrlParser: true });
  

app.use(cors());
var arreglo  = [
    {
        nombre:"admin",
        password:"admin"
    },
    {
        nombre:"user",
        password:"123"
    }
]

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vdn.api+json'}));


app.post('/autenticar',function(req, res){
    console.log(req.body)
    let {username, password} = req.body;
    if (username=="" || password=="") {
        res.status(400);
        res.send('usuario y password son requeridos');
    }
    else if (arreglo.find((x)=>x.nombre==username && x.password==password)){
        res.status(200);
        res.send("OK")
    }
    else{
        res.status(400);
        res.send('FALL');
    }
})



app.post("/addService", (req, res) => {
    const myData = new Service(req.body);
    myData.save()
     .then(item => {
     res.send('ok');
     })
    .catch(err => {
    res.status(400).send("unable to save to database");
     });
});

app.get("/getServices", async(req, res) => {
    try{
        const respuesta = await Service.find({});
	    res.send(respuesta);
    }
    catch(err) {
        res.status(400).send("unable to get data from database");
    }
});

app.get("/getService/:id", async(req, res) => {
    try{
       
        const respuesta = await Service.find({_id: req.params.id});
	    res.send(respuesta);
    }
    catch(err) {
        res.status(400).send("unable to get data from database");
    }
});

app.get("/updateServicePrice/:id", async(req, res) => {
    try{
        const respuesta = await Service.findOneAndUpdate({_id: req.params.id},
            { "price": 640},
            { new: true }
        ).exec();
        
	    res.send(respuesta);
    }
    catch(err) {
        res.status(400).send("unable to update data from database");
    }
});

app.listen(port, function(){
    console.log('servidor funcionando correcto en el puerto:', port);
})