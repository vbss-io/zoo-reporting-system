const data = require('../data/zoo_data');

const getAnimalsName = (day) => {
  const animals = data.species.filter((element) => element.availability.includes(day));
  return animals.map((element) => element.name);
};

const getAnimalsDays = (animal) => {
  const animalInfo = data.species.find((element) => element.name === animal);
  return animalInfo.availability;
};

const getDays = () => {
  const animals = [];
  data.species.forEach((element) => animals.push(element.name));
  return animals;
};

const getAnimals = () => {
  const days = [];
  Object.keys(data.hours).forEach((element) => days.push(element));
  return days;
};

const objMount = () => {
  const obj = {};
  Object.keys(data.hours).forEach((element) => {
    Object.assign(obj, {
      [element]: {
        officeHour: `Open from ${data.hours[element].open}am until ${data.hours[element].close}pm`,
        exhibition: getAnimalsName(element),
      },
    });
    if (data.hours[element].open === 0 || data.hours[element].close === 0) {
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

module.exports = getSchedule;
