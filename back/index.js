const express = require('express');
const app = express();
const port = 3005;
var bodyParser = require('body-parser');
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

app.listen(port, function(){
    console.log('servidor funcionando correcto en el puerto:', port);
})