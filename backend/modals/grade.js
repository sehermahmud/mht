/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Grade Schema ------ */
const gradeSchema = new mongoose.Schema({
  grade: { type: String, required: false },
});

/* ------ Exports ------ */
module.exports = mongoose.model('Grade', gradeSchema);
