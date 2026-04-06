// Toggle function display for Employer and Employee
const employerBox = document.getElementById('employer');
const employeeBox = document.getElementById('employee');
const employerFunctions = document.getElementById('employer-functions');
const employeeFunctions = document.getElementById('employee-functions');

employerBox.addEventListener('click', () => {
  employerFunctions.style.display = employerFunctions.style.display === 'flex' ? 'none' : 'flex';
});

employeeBox.addEventListener('click', () => {
  employeeFunctions.style.display = employeeFunctions.style.display === 'flex' ? 'none' : 'flex';
});