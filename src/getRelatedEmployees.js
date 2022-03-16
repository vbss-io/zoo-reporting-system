const data = require('../data/zoo_data');

function getManagers() {
  // Remoção de itens repetidos consultado no site DelftStack
  let managers = [];
  data.employees.forEach((element) => element.managers.forEach((item) => managers.push(item)));
  return managers.filter((element, index) => managers.indexOf(element) === index);
}

function isManager(id) {
  const managers = getManagers();
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

// console.log(getManagers().includes('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819aa2'))



module.exports = { isManager, getRelatedEmployees };
