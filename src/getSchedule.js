const data = require('../data/zoo_data');

// hours: {
//   Tuesday: { open: 8, close: 6 },
//   Wednesday: { open: 8, close: 6 },
//   Thursday: { open: 10, close: 8 },
//   Friday: { open: 10, close: 8 },
//   Saturday: { open: 8, close: 10 },
//   Sunday: { open: 8, close: 8 },
//   Monday: { open: 0, close: 0 },
// }

// {
// 'Tuesday': {
//   'officeHour': 'Open from 8am until 6pm',
//   'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
// },
// }

const getAnimalsName = (day) => {
  const teste = data.species.filter((element) => element.availability.includes(day));
  return teste.map((element) => element.name);
};

const getAnimalsDays = (animal) => {
  const animalInfo = data.species.find((element) => element.name === animal);
  return animalInfo.availability;
}

// console.log(getAnimalsDays('lions'));

const getDays = () => {
  const animals = [];
  data.species.forEach((element) => animals.push(element.name));
  return animals;
};

const getAnimals = () => {
  const days = [];
  // const days = []
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
  // return obj.find((element) => element === scheduleTarget);
}

console.log(getSchedule('lions'));
// console.log(getSchedule('Monday'));

// const test = data.hours.forEach((element) => Object.assign(obj, {
//   [element]: {},
// }))

// Object.keys(data.hours).forEach((element) => console.log(element))

// console.log('test');

// const test = data.hours.forEach((element) => console.log(element))
// data.forEach((element) => console.log(element.hours))

// Object.assign(obj, {
//   [Object.keys(data.hours)]: [],
// })

//   Tuesday: { open: 8, close: 6 },

// console.log(getAnimals('Tuesday'))

// console.log(Object.keys(data.hours));
// console.log(obj);

module.exports = getSchedule;
