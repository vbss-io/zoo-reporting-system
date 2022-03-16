const data = require('../data/zoo_data');

function getManagers() {
  let managers = [];
  data.employees.forEach((element) => element.managers.forEach((item) => managers.push(item)));
  return managers.filter((element, index) => managers.indexOf(element) === index);
}

function isManager(id) {
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

// let managers = [];

console.log(getManagers().includes('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

// managers = managers.filter((este, i) => managers.indexOf(este) === i);

// const test2 = test.map((element) => element);

// const test2 = test.forEach((element, index) => console.log(element[index]));

// const test2 = data.employees[0].managers;

// console.log(test);
// console.log(managers);
// console.log(test2)




module.exports = { isManager, getRelatedEmployees };
