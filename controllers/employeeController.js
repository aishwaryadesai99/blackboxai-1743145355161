const Employee = require('../models/Employee');

// Add a new security guard
const addEmployee = async (req, res) => {
  try {
    const { name, unitName, badgeNumber, hourlyRate, rank, employmentType } = req.body;
    
    // Validate required fields
    if (!name || !unitName || !badgeNumber || !hourlyRate || !employmentType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for duplicate badge number
    const existingEmployee = await Employee.findOne({ badgeNumber });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Badge number already exists' });
    }

    const newEmployee = new Employee({
      name,
      unitName,
      badgeNumber,
      hourlyRate,
      rank,
      employmentType
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all security guards
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
};

module.exports = { 
  addEmployee,
  getEmployees
};