/* ------ Imports ------ */
const mongoose = require('mongoose');

/* ------ Teacher Schema ------ */
const teacherBatchSchema = new mongoose.Schema({
  Batch: { type: String, required: false },
  teacherPrice: { type: String, required: false },
  teacherEducationboard: { type: String, required: false },
  teacherGrade: { type: String, required: false },
  teachingSubject: { type: String, required: false },
  teacherSchedule: { type: String, required: false },
  teacherExpectedStudents: { type: String, required: false },
  teacherStartDate: { type: String, required: false },
  teacherEndDate: { type: String, required: false },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: 'Teacher is a Required Field',
  },
});

/* ------ Exports ------ */
module.exports = mongoose.model('TeacherBatch', teacherBatchSchema);
