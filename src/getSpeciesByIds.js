import zooData from '../data/zoo_data.js';

function getSpeciesByIds(...ids) {
  const object = zooData.species;
  return object.filter((element) => ids.find((elementFind) => elementFind === element.id));
}

export default getSpeciesByIds;
