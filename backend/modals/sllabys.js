/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Sllabys Schema ------ */
const sllabysSchema = new mongoose.Schema({
  sllabys: { type: String },
  sllabysCode: { type: String },
});

/* ------ Exports ------ */
module.exports = mongoose.model('Sllabys', sllabysSchema);
