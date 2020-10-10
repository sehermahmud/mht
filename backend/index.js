/* ------ Imports ------ */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Grade = require('./routes/grade');
const Subject = require('./routes/subject');
const Sllabys = require('./routes/sllabys');
const School = require('./routes/school');
const Student = require('./routes/student');

const Teacher = require('./modals/teacher');
const TeacherBatch = require('./modals/teacherBatch');

app = express();
app.use(bodyParser.json());
dotenv.config();

/* ------ Mht backend Routes ------ */

/* ------ Grade Backend ------ */
app.post('/api/grade', Grade.createdGrade);

app.get('/api/grades', Grade.getGrade);

app.delete('/api/deleteGrade/:id', Grade.deleteGrade);

app.patch('/api/editGrade/:id', Grade.editGrade);

/* ------ Subject Backend ------ */
app.post('/api/subject', Subject.createdSubject);

app.get('/api/subjects', Subject.getSubject);

app.delete('/api/deleteSubject/:id', Subject.deleteSubject);

app.patch('/api/editSubject/:id', Subject.editSubject);

/* ------ Sllabys Backend ------ */
app.post('/api/sllabys', Sllabys.createdSllabys);

app.get('/api/allSllabys', Sllabys.getSllabys);

app.delete('/api/deleteSllabys/:id', Sllabys.deleteSllabys);

app.patch('/api/editSllabys/:id', Sllabys.editSllabys);

/* ------ School Backend ------ */
app.post('/api/school', School.createdSchool);

app.get('/api/AllSchool', School.getSchool);

app.delete('/api/deleteSchool/:id', School.deleteSchool);

app.patch('/api/editSchool/:id', School.editSchool);

/* ------ Teacher Section ------ */

/* ------ Teacher Backend ------ */
app.post('/teacher/CreateTeacher', async (req, res) => {
  try {
    const teacher = new Teacher();
    (teacher.teacherName = req.body.teacherName),
      (teacher.email = req.body.email),
      (teacher.contactNumber = req.body.contactNumber),
      (teacher.subject = req.body.subject),
      (teacher.percentage = req.body.percentage),
      (teacher.teacherPhoto = req.body.teacherPhoto),
      (teacher.teacherNID = req.body.teacherNID),
      (teacher.teacherLastCertificatePhoto =
        req.body.teacherLastCertificatePhoto),
      await teacher.save();
    res.send(teacher);
  } catch (error) {
    res.status(500);
  }
});

app.get('/teacher/AllTeacher', async (req, res) => {
  try {
    const teacher = await Teacher.find({});
    res.send(teacher);
  } catch (error) {
    res.status(500);
  }
});

app.get('/teacher/OneTeacher/:teacherId', async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ _id: req.params.teacherId });
    res.send(teacher);
  } catch (error) {
    res.status(500);
  }
});

app.put('/teacher/editTeacher/:teacherId', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      {
        _id: req.params.teacherId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.send(teacher);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.delete('/teacher/deleteTeacher/:teacherId', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndRemove({
      _id: req.params.teacherId,
    });
    res.send('This is teacher has been deleted');
  } catch (error) {
    res.sendStatus(500);
  }
});

/* ------ TeacherBatch Backend ------ */
app.post('/teacher/:teacherId/teacherBatch', async (req, res) => {
  // Find a teacher
  const teacher = await Teacher.findOne({ _id: req.params.teacherId });

  // Create TeacherBatch
  const teacherBatch = new TeacherBatch();
  teacherBatch.Batch = req.body.Batch;
  teacherBatch.teacherPrice = req.body.teacherPrice;
  teacherBatch.teacherEducationboard = req.body.teacherEducationboard;
  teacherBatch.teacherGrade = req.body.teacherGrade;
  teacherBatch.teachingSubject = req.body.teachingSubject;
  teacherBatch.teacherSchedule = req.body.teacherSchedule;
  teacherBatch.teacherExpectedStudents = req.body.teacherExpectedStudents;
  teacherBatch.teacherStartDate = req.body.teacherStartDate;
  teacherBatch.teacherEndDate = req.body.teacherEndDate;
  teacherBatch.teacher = teacher._id;
  await teacherBatch.save();

  // Associate teacher with TeacherBatch
  teacher.teacherBatch.push(teacherBatch._id);
  await teacher.save();

  res.send(teacherBatch);
});

app.get('/teacher/:teacherId/allTeacherBatch', async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.params.teacherId }).populate(
    'teacherBatch'
  );
  res.send(teacher);
});

app.put('/teacher/editTeacherBatch/:teacherBatchId', async (req, res) => {
  const teacherBatch = await TeacherBatch.findOneAndUpdate(
    { _id: req.params.teacherBatchId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.send(teacherBatch);
});

app.delete('/teacher/deleteTeacherBatch/:teacherBatchId', async (req, res) => {
  await TeacherBatch.findByIdAndRemove(req.params.teacherBatchId);
  res.send({ message: 'Comment has been delete' });
});

/* ------ TeacherBatch Backend ------ */
app.post('/student/createStudent', Student.createdStudent);

app.get('/student/allStudent', Student.getStudent);

app.patch('/student/editStudent/:id', Student.editStudent);

app.delete('/student/deleteStudent/:id', Student.deleteStudent);

/* ------ Mht backend Routes end ------ */

/* ------ Mht backend Mongodb database connection and Server Setup ------ */

var url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(3001);
    console.log('listening at port 3001');
    console.log('Mongodb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
