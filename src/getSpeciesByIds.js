const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const object = data.species;
  // Acessando primeiro ID
  // return data.species.filter((element) => element.id === ids);
  // Acessando todos elementos ID
  return object.filter((elementFilter) => ids.find((elementFind) => elementFind === elementFilter.id));
}

// console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'))
console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'))
  // console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84'))

module.exports = getSpeciesByIds;
