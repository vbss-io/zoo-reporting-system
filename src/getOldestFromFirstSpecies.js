import zooData from '../data/zoo_data.js';

function getOldestFromFirstSpecies(id) {
  const { employees } = zooData;
  const currentEmployee = employees
    .filter((employee) => employee.id === id)
    .map((employee) => employee.responsibleFor);
  const firstSpecie = currentEmployee[0][0];
  const sortSpecies = zooData.species.filter((specie) => specie.id === firstSpecie)[0].residents
    .sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortSpecies[0];
  return [name, sex, age];
}

export default getOldestFromFirstSpecies;
