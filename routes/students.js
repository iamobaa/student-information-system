var express = require('express');
var router = express.Router();

var Student = require('../models/student');


// GET /students: Fetch all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /students: Add a new student
router.post('/', async (req, res) => {
  const { name, age, major } = req.body;
  const student = new Student({ name, age, major });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /students/:id: Fetch a single student by id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /students/:id: Update a student by id
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student) {
      student.name = req.body.name;
      student.age = req.body.age;
      const updatedStudent = await student.save();
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /students/:id: Delete a student by id
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
