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

function getAnimalMap(options) {
  if (options = 0) {
    return getLocation();
  }
}



// console.log(data.species[0])
// console.log(getAnimals('NE'));

console.log(getAnimalMap());


module.exports = getAnimalMap;
