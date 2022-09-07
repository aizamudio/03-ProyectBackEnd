const mongoose = require('mongoose');

//1. Establecemos conexión con la base de datos
//MONGO_URI=mongodb+srv://aizaro:2014CDMX@cluster0.nbpftiw.mongodb.net/?retryWrites=true&w=majority

mongoose
    .connect ('mongodb+srv://aizaro:2017MasTer@cluster0.nbpftiw.mongodb.net/?retryWrites=true&w=majority',
    function(err){
        if (err) {
            console.error('No se pudo conectar a la base de datos');
            console.error(err);
          } else {
            console.log('Conectado a Mongo Atlas');
          }
    });

// 2. Establecer un modelo de datos

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, maxlength: 20, unique: true },
    aPaterno: { type: String, maxlength: 20, unique: true },
    aMaterno: { type: String, maxlength: 20, unique: true },
    correo: { type: String, maxlength: 50, unique: true },
    rfc: { type: String, maxlength: 14, unique: true },
    domicilio: { type: String, maxlength: 100, minlength: 20 }
  });

// 3. Crear instancias de los schemas
const Usuario4 = mongoose.model('usuarios', UsuarioSchema);

new Usuario4({
    nombre: 'Luis Alberto',
    aPaterno: 'Espindola',
    aMaterno: 'Quiñones',
    correo: 'spindalber@gmail.com',
    rfc: 'EIQL891223J11',
    domicilio: 'Comunal 70, Col. Acacias, Benito Juarez'
}).save(function (err, document) {
    if (err) {
      console.error('No se pudo registrar en la base de datos');
      console.error(err);
    } else {
      console.log('Documento insertado en la base de datos');
      console.log(document);
    }
  });