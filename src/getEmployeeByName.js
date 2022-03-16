const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // Implementando mesma logica do requisto 2
  const object = data.employees;

  return object.find((element) => element.firstName === employeeName);
}

// console.log(data.employees)

console.log(getEmployeeByName('Nigel'))

module.exports = getEmployeeByName;
