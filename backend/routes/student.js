/* ------ Imports ------ */
const Student = require('../modals/student');

/* ------ Create A Student ------ */
const createdStudent = async (req, res, next) => {
  const createdStudent = new Student({
    studentFullname: req.body.studentFullname,
    email: req.body.email,
    fatherName: req.body.fatherName,
    motherName: req.body.motherName,
    studentPhoneNumber: req.body.studentPhoneNumber,
    guardianPhoneNumber: req.body.guardianPhoneNumber,
    specialNote: req.body.specialNote,
    studentPhoto: req.body.studentPhoto,
    school: req.body.school,
    educationboard: req.body.educationboard,
    studentSubject: req.body.studentSubject,
    batch: req.body.batch,
    studentStartDate: req.body.studentStartDate,
  });

  const result = await createdStudent.save();
  console.log(typeof createdStudent._id);
  res.json(result);
};

/* ------ Get All the Student ------ */
const getStudent = async (req, res, next) => {
  const student = await Student.find().exec();
  res.json(student);
};

/* ------ delete a Student by it's id ------ */
const deleteStudent = async (req, res, next) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student has been deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a Student by it's id ------ */
const editStudent = async (req, res, next) => {
  Student.findById(req.params.id, (err, student) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let s in req.body) {
      student[s] = req.body[s];
    }
    student.save();
    res.json(student);
  });
};

/* ------ Exports ------ */
exports.createdStudent = createdStudent;
exports.getStudent = getStudent;
exports.editStudent = editStudent;
exports.deleteStudent = deleteStudent;
