import zooData from '../data/zoo_data.js';

function getOldestFromFirstSpecies(id) {
  const { employees } = zooData;
  const currentEmployee = employees
    .filter((employee) => employee.id === id)
    .map((employee) => employee.responsibleFor);
  const firstSpecie = currentEmployee[0][0];
  const filterSpecies = zooData.species.filter((specie) => specie.id === firstSpecie);
  const residentsSpecies = filterSpecies[0].residents;
  const sortSpecies = residentsSpecies.sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortSpecies[0];
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

export default getOldestFromFirstSpecies;
