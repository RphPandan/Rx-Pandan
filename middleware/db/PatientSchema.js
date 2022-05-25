const { isEmail } = require('validator');
const mongoose = require('mongoose');
const RxSchema = require('./RxSchema');

const { Schema } = mongoose;
const PatientSchema = new Schema({
  name: String,
  email: {
    validate: {
      validator: isEmail,
      message: 'Invalid Email.',
    },
  },
  Rxs: [RxSchema],
});

const Patient = mongoose.model('patient', PatientSchema);
const Rx = mongoose.model('Rx', RxSchema);

module.exports = { Patient, Rx };
