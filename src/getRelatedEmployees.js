const data = require('../data/zoo_data');

function getManagers() {
  // Remoção de itens repetidos consultado no site DelftStack usando filter
  const managers = [];
  data.employees.forEach((element) => element.managers.forEach((item) => managers.push(item)));
  return managers.filter((element, index) => managers.indexOf(element) === index);
}

function isManager(id) {
  const managers = getManagers();
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager === true) {
    const managed = data.employees.filter((person) => person.managers.includes(managerId));
    return managed.map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
