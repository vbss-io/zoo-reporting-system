const data = require('../data/zoo_data');

const getAnimalsName = (animal, sex = 0) => {
  const names = [];
  if (sex === 0) {
    const animals = data.species.find((itemFind) => itemFind.name === animal);
    animals.residents.forEach((element) => names.push(element.name));
    console.log(sex);
    return names;
  }
  const animals = data.species.find((itemFind) => itemFind.name === animal);
  animals.residents.filter((element) => element.sex === sex).forEach((ele) => names.push(ele.name));
  return names;
};

const getAnimals = (location, option = false) => {
  const animals = [];
  if (option === false) {
    data.species.filter((item) => item.location === location).forEach((item) => {
      animals.push(item.name);
    });
    return animals;
  }
  data.species.filter((element) => element.location === location).forEach((element) => {
    animals.push(element.name);
  });
  console.log(animals);
  return animals;
};

const getLocationSorted = (sex) => {
  const location = {};
  data.species.forEach((element) => {
    Object.assign(location, {
      [element.location]: [],
    });
    getAnimals(element.location).forEach((item) => {
      location[element.location].push({
        [item]: getAnimalsName(item, sex).sort(),
      });
    });
  });
  return location;
};

const getLocation = (option = 0, sex = 0) => {
  const location = {};
  if (option === 0) {
    data.species.forEach((element) => Object.assign(location, {
      [element.location]: getAnimals(element.location),
    }));
    return location;
  }
  data.species.forEach((element) => {
    Object.assign(location, {
      [element.location]: [],
    });
    getAnimals(element.location).forEach((item) => {
      location[element.location].push({
        [item]: getAnimalsName(item, sex),
      });
    });
  });
  return location;
};

function getAnimalMap(options = 0) {
  if (options === 0 || !Object.keys(options).includes('includeNames')) {
    return getLocation();
  }
  if (Object.keys(options).includes('sorted')) {
    const animalSex = options.sex;
    return getLocationSorted(animalSex);
  }
  const animalSex = options.sex;
  return getLocation(true, animalSex);
}

module.exports = getAnimalMap;
