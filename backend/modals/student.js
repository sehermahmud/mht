/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Subject Schema ------ */
const studentSchema = new mongoose.Schema({
  studentFullname: { type: String, required: false },
  email: { type: String, required: false },
  fatherName: { type: String, required: false },
  motherName: { type: String, required: false },
  studentPhoneNumber: { type: String, required: false },
  guardianPhoneNumber: { type: String, required: false },
  specialNote: { type: String, required: false },
  studentPhoto: { type: String, required: false },
  school: { type: String, required: false },
  educationboard: { type: String, required: false },
  studentSubject: { type: String, required: false },
  batch: { type: String, required: false },
  studentStartDate: { type: String, required: false },
});

/* ------ Exports ------ */
module.exports = mongoose.model('Student', studentSchema);
