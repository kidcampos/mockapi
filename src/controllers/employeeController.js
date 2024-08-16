const employees = require('../models/employeeModel');

const getAllEmployees = (req, res) => {
  res.json(employees);
};

const getEmployeeById = (req, res) => {
  const employee = employees.find(u => u.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
};

const createEmployee = (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

const updateEmployee = (req, res) => {
  const employee = employees.find(u => u.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');

  employee.name = req.body.name;
  employee.email = req.body.email;
  res.json(employee);
};

const deleteEmployee = (req, res) => {
  const employeeIndex = employees.findIndex(u => u.id === parseInt(req.params.id));
  if (employeeIndex === -1) return res.status(404).send('Employee not found');

  employees.splice(employeeIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};