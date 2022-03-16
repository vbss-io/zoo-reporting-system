const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = data.species

  return object.find((element) => element.name === animal);
}

// console.log(getAnimalsOlderThan('boi', 10));
// console.log(data.species[0].residents)

// const test = data.species.find((element) => element.name === 'lions');

// const test = data.species.forEach((item) => console.log(item.residents));

// console.log(test);

console.log(getAnimalsOlderThan('otters', 10));


module.exports = getAnimalsOlderThan;
