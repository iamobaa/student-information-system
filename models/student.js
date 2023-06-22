// @/models.js
const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  age: { 
    type: Number,
    required: true, 
    // min: 18, 
    // max: 65
  },
  createdDate: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    required: false,
    default: Date.now(),
  },
});

const Student = mongoose.model("Student", StudentSchema);

// module.exports = { Student };
module.exports = Student;