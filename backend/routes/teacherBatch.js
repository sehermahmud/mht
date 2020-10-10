/* ------ Imports ------ */
const Teacher = require('../modals/teacher');
const TeacherBatch = require('../modals/teacherBatch');

/* ------ Create A Teacher Batch ------ */
const createdTeacherBatch = async (req, res, next) => {
  const teacherBatch = new TeacherBatch({
    Batch: req.body.Batch,
    teacherPrice: req.body.teacherPrice,
    teacherEducationboard: req.body.teacherEducationboard,
    teacherGrade: req.body.teacherGrade,
    teachingSubject: req.body.teachingSubject,
    teacherSchedule: req.body.teacherSchedule,
    teacherExpectedStudents: req.body.teacherExpectedStudents,
    teacherStartDate: req.body.teacherStartDate,
    teacherEndDate: req.body.teacherEndDate,
  });

  const result = await teacherBatch.save();
  console.log(typeof teacherBatch._id);
  res.json(result);
};

/* ------ Get All Teacher Batch ------ */
const getTeacherBatch = async (req, res, next) => {
  const teacherBatch = await TeacherBatch.find().exec();
  res.json(teacherBatch);
};

/* ------ Delete a Teacher's Batch by it's id ------ */
const deleteBatch = async (req, res, next) => {
  TeacherBatch.findByIdAndDelete(req.params.id)
    .then(() => res.json('Teacher Batch deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

const editTeacherBatch = async (req, res, next) => {
  TeacherBatch.findById(req.params.id, (err, teacherBatch) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let t in req.body) {
      teacherBatch[t] = req.body[t];
    }
    teacherBatch.save();
    res.json(teacherBatch);
  });
};

exports.createdTeacherBatch = createdTeacherBatch;
exports.getTeacherBatch = getTeacherBatch;
exports.deleteBatch = deleteBatch;
exports.editTeacherBatch = editTeacherBatch;
