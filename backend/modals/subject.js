/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Subject Schema ------ */
const subjectSchema = new mongoose.Schema({
  subject: { type: String, required: false },
});

/* ------ Exports ------ */
module.exports = mongoose.model('Subject', subjectSchema);
