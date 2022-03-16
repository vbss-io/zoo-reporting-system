const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Implementando mesma logica do requisto 2
  const object = data.employees;

  return object.find((element) => element.firstName === employeeName || element.lastName === employeeName);
}

// console.log(data.employees)

console.log(getEmployeeByName('Nelson'))

module.exports = getEmployeeByName;
