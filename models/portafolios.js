require('dotenv').config();
const {connect, Schema, model} = require('mongoose');

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

// 3. Crear instancias de los schemas

  const Portafolio7 = model('portafolios', PortafolioSchema);

  new Portafolio7({
    clavePortafolio: 'por00007',
    RFCusuario: 'GUDG850312JK1',
    descripción: 'Portafolio diversificado'
  }).save(function (err, document) {
      if (err) {
        console.error('No se pudo registrar en la base de datos');
        console.error(err);
      } else {
        console.log('Documento insertado en la base de datos');
        console.log(document);
      }
    });