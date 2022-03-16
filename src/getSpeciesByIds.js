const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // Acessando primeiro ID
  return data.species.find((element) => element.id === ids);
}

// console.log(data.species[0]);
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'))
// console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84'))

module.exports = getSpeciesByIds;
