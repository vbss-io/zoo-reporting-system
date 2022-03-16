const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const object = data.species;
  return object.filter((element) => ids.find((elementFind) => elementFind === element.id));
}

module.exports = getSpeciesByIds;
