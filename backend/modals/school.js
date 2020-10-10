/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ School Schema ------ */
const schoolSchema = new mongoose.Schema({
  schoolName: { type: String, required: false },
  description: { type: String, required: false },
  address: { type: String, required: false },
});

/* ------ Exports ------ */
module.exports = mongoose.model('School', schoolSchema);
