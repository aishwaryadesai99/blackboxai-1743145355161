const express = require('express');
const { 
  addEmployee,
  getEmployees
} = require('../controllers/employeeController');

const router = express.Router();

// POST /api/employees - Add new security guard
router.post('/', addEmployee);

// GET /api/employees - Get all security guards
router.get('/', getEmployees);

module.exports = router;
