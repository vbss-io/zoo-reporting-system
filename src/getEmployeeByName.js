const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = 0) {
  // Implementando mesma logica do requisto 2
  const object = data.employees;
  let employeeData = object.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return (typeof employeeData !== 'undefined' ? employeeData : {});
  // return employeeData;
}

// console.log(data.employees)

console.log(getEmployeeByName('Nelson'))

module.exports = getEmployeeByName;
