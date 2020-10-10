/* ------ Imports ------ */
const School = require('../modals/school');

/* ------ Create A School ------ */
const createdSchool = async (req, res, next) => {
  const createdSchool = new School({
    schoolName: req.body.schoolName,
    description: req.body.description,
    address: req.body.address,
  });

  const result = await createdSchool.save();
  console.log(typeof createdSchool._id);
  res.json(result);
};

/* ------ Get All the School ------ */
const getSchool = async (req, res, next) => {
  const school = await School.find().exec();
  res.json(school);
};

/* ------ Delete a School by it's id ------ */
const deleteSchool = async (req, res, next) => {
  School.findByIdAndDelete(req.params.id)
    .then(() => res.json('School deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a School by it's id ------ */
const editSchool = async (req, res, next) => {
  School.findById(req.params.id, (err, school) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let s in req.body) {
      school[s] = req.body[s];
    }
    school.save();
    res.json(school);
  });
};

/* ------ Exports ------ */
exports.createdSchool = createdSchool;
exports.getSchool = getSchool;
exports.deleteSchool = deleteSchool;
exports.editSchool = editSchool;
