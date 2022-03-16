const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = data.species;
  const animalData = object.find((element) => element.name === animal);

  return animalData.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
