//var express = require('express'),
//    bodyParser = require('body-parser'),
//    cors = require('cors');

// Objeto global de la app
//var app = express();

// configuración de middlewares
//app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// Manejando los errores 404
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// Iniciando el servidor...
//var server = app.listen(process.env.PORT || 3000, function(){
//  console.log('Escuchando en el puerto ' + server.address().port);
//});

// Con createServer invocamos al módulo http
const {createServer} = require('node:http');

// Declaramos la constante html
const html = `
  <html>
    <body>
      <h1>ANALISIS BURSATIL</h1>
    </body>
  </html>
`;

// Respondemos con el valor d ela constante html
const server = createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.write(html);
  response.end();
});

server.listen(8080);