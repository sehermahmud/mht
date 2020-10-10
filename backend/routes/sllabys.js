/* ------ Imports ------ */
const Sllabys = require('../modals/sllabys');

/* ------ Create A Sllabys ------ */
const createdSllabys = async (req, res, next) => {
  const createdSllabys = new Sllabys({
    sllabys: req.body.sllabys,
    sllabysCode: req.body.sllabysCode,
  });

  const result = await createdSllabys.save();
  console.log(typeof createdSllabys._id);
  res.json(result);
};

/* ------ Get All Sllabys ------ */
const getSllabys = async (req, res, next) => {
  const sllabys = await Sllabys.find().exec();
  res.json(sllabys);
};

/* ------ Delete a Sllabys by it's id ------ */
const deleteSllabys = async (req, res, next) => {
  Sllabys.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sllabys deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
};

/* ------ Edit a Sllabys by it's id ------ */
const editSllabys = async (req, res, next) => {
  Sllabys.findById(req.params.id, (err, sllabys) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let s in req.body) {
      sllabys[s] = req.body[s];
    }
    sllabys.save();
    res.json(sllabys);
  });
};

/* ------ Exports ------ */
exports.createdSllabys = createdSllabys;
exports.getSllabys = getSllabys;
exports.deleteSllabys = deleteSllabys;
exports.editSllabys = editSllabys;
