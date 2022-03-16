const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = data.species
  const animalData = object.find((element) => element.name === animal);

  return animalData.residents.every((element) => element.age >= age);
}

// console.log(getAnimalsOlderThan('boi', 10));
// console.log(data.species[0].residents)

// const test = data.species.find((element) => element.name === 'lions');
// const test2 = test.residents.every((element) => element.age >= 7);

// const test = data.species.forEach((item) => console.log(item.residents));

// console.log(test2);

// console.log(getAnimalsOlderThan('otters', 8));

module.exports = getAnimalsOlderThan;
