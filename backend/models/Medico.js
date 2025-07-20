const mongoose = require('mongoose');


const medicoSchema = new mongoose.Schema({
  nome: String,
  especialidade: String,
  crm: Number
}, { collection: 'medicosDB' }); 

module.exports = mongoose.model('Medico', medicoSchema);
