const data = require('../data/zoo_data');

const allAnimals = () => {
  const animals = {};

  data.species.map((element) => Object.assign(animals, {
    [element.name]: element.residents.length,
  }));

  return animals;
};

const onlySpecie = (specie) => {
  const animals = data.species.find((element) => element.name === specie);
  return animals;
};

const specieAndSex = (specie, sex) => {
  const animals = onlySpecie(specie).residents.filter((element) => element.sex === sex);

  return animals.length;
};

function countAnimals(animal = 0) {
  if (Object.keys(animal).length === 1) {
    return onlySpecie(animal.specie).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return specieAndSex(animal.specie, animal.sex);
  }
  return allAnimals();
}

module.exports = countAnimals;
