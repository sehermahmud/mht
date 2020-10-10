/* ------ Imports ------ */
const Grade = require('../modals/grade');

/* ------ Create A Grade ------ */
const createdGrade = async (req, res, next) => {
  const createdGrade = new Grade({
    grade: req.body.grade,
  });

  const result = await createdGrade.save();
  console.log(typeof createdGrade._id);
  res.json(result);
};

/* ------ Get All Grade ------ */
const getGrade = async (req, res, next) => {
  const grade = await Grade.find().exec();
  res.json(grade);
};

/* ------ Delete a Grade by it's id ------ */
const deleteGrade = async (req, res, next) => {
  Grade.findByIdAndDelete(req.params.id)
    .then(() => res.json('Grade deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a Grade by it's id ------ */
const editGrade = async (req, res, next) => {
  Grade.findById(req.params.id, (err, grade) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let g in req.body) {
      grade[g] = req.body[g];
    }
    grade.save();
    res.json(grade);
  });
};

/* ------ Exports ------ */
exports.createdGrade = createdGrade;
exports.getGrade = getGrade;
exports.deleteGrade = deleteGrade;
exports.editGrade = editGrade;
