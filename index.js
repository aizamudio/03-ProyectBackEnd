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

// 2. Establecer un modelo de datos

const UsuarioSchema = new Schema({
    nombre: { type: String, maxlength: 20, unique: true },
    aPaterno: { type: String, maxlength: 20, unique: true },
    aMaterno: { type: String, maxlength: 20, unique: true },
    correo: { type: String, maxlength: 50, unique: true },
    rfc: { type: String, maxlength: 14, unique: true },
    domicilio: { type: String, maxlength: 100, minlength: 20 }
  });


// 3. Crear instancias de los schemas

const Usuario10 = model('usuarios', UsuarioSchema);

new Usuario10({
    nombre: 'Luis',
    aPaterno: 'Solis',
    aMaterno: 'Ramirez',
    correo: 'luissolis78@hotmail.com',
    rfc: 'SORL871012C08',
    domicilio: 'Tlacotalpan 525, Col. Roma Sur, Cuauhtemoc'
}).save(function (err, document) {
    if (err) {
      console.error('No se pudo registrar en la base de datos');
      console.error(err);
    } else {
      console.log('Documento insertado en la base de datos');
      console.log(document);
    }
  });
  