const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unitName: { type: String, required: true },
  badgeNumber: { type: String, unique: true, required: true },
  hourlyRate: { type: Number, required: true },
  rank: { type: String },
  employmentType: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Contract'], 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);