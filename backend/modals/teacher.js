/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Teacher Schema ------ */
const teacherSchema = new mongoose.Schema({
  teacherName: { type: String, required: false },
  email: { type: String, required: false },
  contactNumber: { type: String, required: false },
  subject: { type: String, required: false },
  percentage: { type: String, required: false },
  teacherPhoto: { type: String, required: false },
  teacherNID: { type: String, required: false },
  teacherLastCertificatePhoto: { type: String, required: false },
  teacherBatch: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeacherBatch',
      required: 'TeacherBatch is a Required Field',
    },
  ],
});

/* ------ Exports ------ */
module.exports = mongoose.model('Teacher', teacherSchema);
