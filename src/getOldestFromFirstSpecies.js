const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employees = data.employees;
  const currentEmployee = employees.filter(employee => employee.id === id).map(employee => employee.responsibleFor);
  const firstSpecie = currentEmployee[0][0];
  const sortSpecies = data.species.filter(specie => specie.id === firstSpecie)[0].residents
    .sort((a, b) => b.age - a.age);
  const oldest = sortSpecies[0];
  return [oldest.name, oldest.sex, oldest.age];
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');


module.exports = getOldestFromFirstSpecies;
