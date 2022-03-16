const data = require('../data/zoo_data');

const allAnimals = () => {
  const animals = {};

  data.species.map((element) => Object.assign(animals, {
    [element.name]: element.residents.length
  }));

  return animals;
}

const onlySpecie = (specie) => {
  const animals = data.species.find((element) => element.name === specie);
  return animals.residents.length;
}

function countAnimals(animal = 0) {

  if (animal === 0) {
    return allAnimals();
  }
  if (Object.keys(animal).length === 1) {
    return onlySpecie(animal.specie);
  }

}

console.log(countAnimals({ specie: 'penguins' }));
// console.log(countAnimals());

module.exports = countAnimals;
