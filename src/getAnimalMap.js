const data = require('../data/zoo_data');

const getAnimals = (location) => {
  const animals = [];
  data.species.filter((element) => element.location === location).forEach((element) => animals.push(element.name));
  return animals;
}

const getLocation = () => {
  const location = {}
  data.species.forEach((element) => Object.assign(location, {
    [element.location]: getAnimals(element.location),
  }));
  return location;
}

function getAnimalMap(options = 0) {
  if (options === 0 || !Object.keys(options).includes('includeNames')) {
    return getLocation();
  }
  return 0;
}

const test = { sex: 'female' };
const test2 = { sex: 'female', sorted: true };
const test3 = { includeNames: true };


// console.log(data.species[0])
// console.log(getAnimals('NE'));

// console.log(getAnimalMap());
console.log(getAnimalMap(test3));


module.exports = getAnimalMap;
