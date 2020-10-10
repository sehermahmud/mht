/* ------ Imports ------ */
const fs = require('fs');
const Teacher = require('../modals/teacher');

/* ------ Create A Teacher ------ */
const createdTeacher = async (req, res, next) => {
  const createdTeacher = new Teacher({
    teacherName: req.body.teacherName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    subject: req.body.subject,
    percentage: req.body.percentage,
    teacherPhoto: req.body.teacherPhoto,
    teacherNID: req.body.teacherNID,
    teacherLastCertificatePhoto: req.body.teacherLastCertificatePhoto,
  });

  const result = await createdTeacher.save();
  console.log(typeof createdTeacher._id);
  res.json(result);
};

/* ------ Get All Teacher ------ */
const getTeacher = async (req, res, next) => {
  const teacher = await Teacher.find().exec();
  res.json(teacher);
};

/* ------ Delete a Teacher by it's id ------ */
const deleteTeacher = async (req, res, next) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Teacher deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a Teacher by it's id ------ */
const editTeacher = async (req, res, next) => {
  Teacher.findById(req.params.id, (err, teacher) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let t in req.body) {
      teacher[t] = req.body[t];
    }
    teacher.save();
    res.json(teacher);
  });
};

/* ------ Exports ------ */
exports.createdTeacher = createdTeacher;
exports.getTeacher = getTeacher;
exports.deleteTeacher = deleteTeacher;
exports.editTeacher = editTeacher;
