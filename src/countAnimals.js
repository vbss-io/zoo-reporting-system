import zooData from '../data/zoo_data.js';

const allAnimals = () => {
  const animals = {};

  zooData.species.forEach((element) => Object.assign(animals, {
    [element.name]: element.residents.length,
  }));

  return animals;
};

const onlySpecie = (specie) => {
  const animals = zooData.species.find((element) => element.name === specie);
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

export default countAnimals;
