var app = require ('./config/express');
var path = require('path');

app.get('/data', function(req, res) {
	res.sendFile(__dirname + '/data/products.json');
});

app.listen(3000,function(){
    console.log("Servidor iniciado");
});