const data = require('../data/zoo_data');

function getManagers() {
  // new Set(...) foi uma alternativa encontrada no google e baseada pelo mdn
  // usado para remover itens repetidos
  let managers = [];
  data.employees.forEach((element) => element.managers.forEach((item) => managers.push(item)));
  return new Set(managers);
}


function isManager(id) {
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(getManagers());

module.exports = { isManager, getRelatedEmployees };
