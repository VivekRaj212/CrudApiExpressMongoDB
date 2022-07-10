const studentData = require("../models/studentModel");

const CreateStudentDetails = async (req, res) => {
  try {
    const { name, age, fees } = req.body;

    const record = new studentData({
      name: name,
      age: age,
      fees: fees,
    });

    const result = await record.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getStudentsDetails = async (req, res) => {
  try {
    const result = await studentData.find();

    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const UpdateStudentsDetails = async (req, res) => {
  try {
    const result = await studentData.findByIdAndUpdate(req.params.id, req.body);

    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getStudentDetailbyId = async (req, res) => {
  try {
    const result = await studentData.findById(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const deleteStudentDetailsbyId = async (req, res) => {
  try {
    const result = await studentData.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  CreateStudentDetails,
  getStudentsDetails,
  UpdateStudentsDetails,
  getStudentDetailbyId,
  deleteStudentDetailsbyId,
};
