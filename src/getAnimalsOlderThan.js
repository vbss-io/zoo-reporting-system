import zooData from '../data/zoo_data.js';

function getAnimalsOlderThan(animal, age) {
  const object = zooData.species;
  const animalData = object.find((element) => element.name === animal);

  return animalData.residents.every((element) => element.age >= age);
}

export default getAnimalsOlderThan;
