const mongoose = require('mongoose');

const { Schema } = mongoose;

const RxSchema = new Schema({
  Patient: mongoose.ObjectId,
  active_ingredients: {
    type: String,
    unique: true,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  dosage_form: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    minlength: 8,
    lowercase: true,
    trim: true,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
  adherenceBoxes: {
    type: Array,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rxcui: {
    type: Array,
    required: true,
  },
  pharm_class: {
    type: Array,
    required: true,
  },
  adherence: {
    type: Boolean,
    default: false,
  },
  generic_name: {
    type: String,
  },
  brand_name: {
    type: String,
  },
  display_name: {
    type: String,
  },
}, { timestamps: true });

module.exports = { RxSchema };
