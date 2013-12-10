var express=require('express');
var app = express();

app.get('/', function (req, res) {   
	res.send('Portada');
});

app.get('/proc', function (req, res) {   
	res.send('No es la portada');
});

var port=process.env.PORT || 5000;
app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');