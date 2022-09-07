require('dotenv').config();

const {connect, Schema, model} = require('mongoose');
const {createServer} = require('http');       //Crear createServer para conectar a servidor

//1. Establecemos conexión con la base de datos

connect(process.env.MONGO_URI, function (err){
      if (err) {
        console.error('No se pudo conectar a la base de datos');
        console.error(err);
        process.exit(1); // Cierra el proceso de manera erronea
      } else {
        console.log('Conectado a Mongo Atlas');
      }
    });

// 2. Establecer modelos de datos

const UsuarioSchema = new Schema({
  nombre: { type: String, maxlength: 20, unique: true },
  aPaterno: { type: String, maxlength: 20, unique: true },
  aMaterno: { type: String, maxlength: 20, unique: true },
  correo: { type: String, maxlength: 50, unique: true },
  rfc: { type: String, maxlength: 14, unique: true },
  domicilio: { type: String, maxlength: 100, minlength: 20 }
});

const EmisoraSchema = new Schema ({
  claveEmisora: { type: String, maxlength: 20, unique: true },
  emisora: { type: String, maxlength: 100, unique: true },
  bolsa: { type: String, maxlength: 100, minlength:3 }
});

const TickerSchema = new Schema ({
  claveTicker: { type: String, maxlength: 20, unique: true },
  nombreTicker: { type: String, maxlength: 100, unique: true },
  emisora: { type: String, maxlength: 20, minlength:3 }
});

const PortafolioSchema = new Schema ({
  clavePortafolio: { type: String, maxlength: 20, unique: true },
  RFCusuario: { type: String, maxlength: 14 },
  descripción: { type: String, maxlength: 100, minlength:3 }
});

const portaTickersSchema = new Schema ({
  clavePortafolio: { type: String, maxlength: 20, minlength:3},
  claveTicker: { type: String, maxlength: 20, minlength:3}                     
});

const UsuarioModel = model('usuarios', UsuarioSchema);
const EmisoraModel = model('emisoras', EmisoraSchema);
const TickerModel = model('tickers', TickerSchema);
const PortafolioModel = model('portafolios', PortafolioSchema);
const PortaTickersModel = model('portatickers', portaTickersSchema);

// 3. Crear instancias de los schemas

/*
  const portaTickers13 = model('portatickers', portaTickersSchema);

  new portaTickers13({
    clavePortafolio: 'por00005',
    claveTicker: 'FMTY14'
  }).save(function (err, document) {
      if (err) {
        console.error('No se pudo registrar en la base de datos');
        console.error(err);
      } else {
        console.log('Documento insertado en la base de datos');
        console.log(document);
      }
    });
*/

const server = createServer(function (request, response) {
  if (request.url === '/portafolios') {
    PortafolioModel.find(function (err, portafolios) {
      if (err) {
        response.write('No se puede procesar tu solicitud');
        response.end();
      } else {
        response.write(JSON.stringify(portafolios));
        response.end();
      }
    });
  } else if (request.url.startsWith('/portafolios/usuarios/')) {

  } else {
    response.write('Error 404: Elemento no encontrado');
    response.end();
  }

//  console.log(request.url);
//  response.write('Hello World');
//  response.end();
});

server.listen(8080, function() {
  console.log('Servidor escuchando en el puerto 8080');
});
