const { connect, Schema, model } = require('mongoose');

//mongoose
    connect ('mongodb+srv://aizaro:2017MasTer@cluster0.nbpftiw.mongodb.net/?retryWrites=true&w=majority',
    function(err){
        if (err) {
            console.error('No se pudo conectar a la base de datos');
            console.error(err);
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
const Usuario = model('usuarios', UsuarioSchema);

// SELECT * FROM users;
Usuario.find(function (err, result) {
    if (err) {
      console.error('No se puede realizar consulta en base de datos');
      console.error(err);
    } else {
      console.log(result);
    }
  });
