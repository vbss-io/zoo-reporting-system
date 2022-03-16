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
  const manager = isManager(managerId);
  if (manager === true) {
    const managed = data.employees.filter((person) => person.managers.includes(managerId));
    return managed.map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getManagers().includes('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819aa2'))

// const test = data.employees.filter((person) => person.managers.includes('b0dc644a-5335-489b-8a2c-4e086c7819a2'))
// const test2 = test.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(test);
// console.log(test2);

// console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2a'))



module.exports = { isManager, getRelatedEmployees };
