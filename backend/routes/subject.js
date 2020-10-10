/* ------ Imports ------ */
const Subject = require('../modals/subject');

/* ------ Create A Subject ------ */
const createdSubject = async (req, res, next) => {
  const createdSubject = new Subject({
    subject: req.body.subject,
  });

  const result = await createdSubject.save();
  console.log(typeof createdSubject._id);
  res.json(result);
};

/* ------ Get All Subject ------ */
const getSubject = async (req, res, next) => {
  const subject = await Subject.find().exec();
  res.json(subject);
};

/* ------ Delete a Subject by it's id ------ */
const deleteSubject = async (req, res, next) => {
  Subject.findByIdAndDelete(req.params.id)
    .then(() => res.json('Subject deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a Subject by it's id ------ */
const editSubject = async (req, res, next) => {
  Subject.findById(req.params.id, (err, subject) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let s in req.body) {
      subject[s] = req.body[s];
    }
    subject.save();
    res.json(subject);
  });
};

/* ------ Exports ------ */
exports.createdSubject = createdSubject;
exports.getSubject = getSubject;
exports.deleteSubject = deleteSubject;
exports.editSubject = editSubject;
