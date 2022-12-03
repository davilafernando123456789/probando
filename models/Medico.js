var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicoSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    apellidos: {type: String, required: true, max: 100},
    genero: {type: String, required: true, max: 2},
    dni: {type: String, required: true, max: 8},
    especialidad: {type: String, required: true, max: 20},
    fecha_nacimiento: {type: String, required: true, max:10},
    direccion: {type: String, required: true, max: 50},
    email: {type: String, required: true, max: 50},
    estado: {type: String, required: true, max: 2},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medico', MedicoSchema);
