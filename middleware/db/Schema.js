const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
});

const Patient = mongoose.model("patient", PatientSchema);

module.exports = { Patient };
