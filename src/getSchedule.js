import zooData from '../data/zoo_data.js';

const getAnimalsName = (day) => {
  const animals = zooData.species.filter((element) => element.availability.includes(day));
  return animals.map((element) => element.name);
};

const getAnimalsDays = (animal) => {
  const animalInfo = zooData.species.find((element) => element.name === animal);
  return animalInfo.availability;
};

const getDays = () => {
  const animals = [];
  zooData.species.forEach((element) => animals.push(element.name));
  return animals;
};

const getAnimals = () => {
  const days = [];
  Object.keys(zooData.hours).forEach((element) => days.push(element));
  return days;
};

const objMount = () => {
  const obj = {};
  Object.keys(zooData.hours).forEach((element) => {
    const hr = `Open from ${zooData.hours[element].open}am until ${zooData.hours[element].close}pm`;
    Object.assign(obj, {
      [element]: {
        officeHour: hr,
        exhibition: getAnimalsName(element),
      },
    });
    if (zooData.hours[element].open === 0 || zooData.hours[element].close === 0) {
      obj[element].officeHour = 'CLOSED';
      obj[element].exhibition = 'The zoo will be closed!';
    }
  });
  return obj;
};

function getSchedule(scheduleTarget = 0) {
  const check = (!getAnimals().includes(scheduleTarget) && !getDays().includes(scheduleTarget));
  if (scheduleTarget === 0 || check) {
    return objMount();
  }
  if (!getAnimals().includes(scheduleTarget)) {
    return getAnimalsDays(scheduleTarget);
  }
  return {
    [scheduleTarget]: objMount()[scheduleTarget],
  };
}

export default getSchedule;
