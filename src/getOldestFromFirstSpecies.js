const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const currentEmployee = employees
    .filter((employee) => employee.id === id)
    .map((employee) => employee.responsibleFor);
  const firstSpecie = currentEmployee[0][0];
  const sortSpecies = data.species.filter((specie) => specie.id === firstSpecie)[0].residents
    .sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortSpecies[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
