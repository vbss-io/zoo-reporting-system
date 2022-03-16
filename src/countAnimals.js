const data = require('../data/zoo_data');

const allAnimals = () => {
  const animals = {};

  data.species.map((element) => Object.assign(animals, {
    [element.name]: element.residents.length
  }));

  return animals;
}

function countAnimals(animal = 0) {

  if (animal === 0) {
    return allAnimals();
  }

}


console.log(countAnimals());

module.exports = countAnimals;
