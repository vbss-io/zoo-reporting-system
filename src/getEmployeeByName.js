const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // Implementando mesma logica do requisto 2
  const object = data.employees;
  const employee = object.find((item) => item.firstName === name || item.lastName === name);
  return (typeof employee !== 'undefined' ? employee : {});
}

module.exports = getEmployeeByName;
