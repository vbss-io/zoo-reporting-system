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

const getAnimals = (day) => {
  const teste = data.species.filter((element) => element.availability.includes(day))
  return teste.map((element) => element.name);
}

function getSchedule(scheduleTarget) {
  const obj = {};
  for (let item in data.hours) {
    Object.assign(obj, {
      [item]: {
        officeHour: `Open from ${data.hours[item].open}am until ${data.hours[item].close}pm`,
        exhibition: getAnimals(item),
        // exhibition: '',
      },
    });
    if (data.hours[item].open === 0 || data.hours[item].close === 0) {
      obj[item].officeHour = 'CLOSED';
      obj[item].exhibition = 'The zoo will be closed!';
    }
  }
  return obj;
}

console.log(getSchedule());


// const test = data.hours.forEach((element) => Object.assign(obj, {
//   [element]: {},
// }))

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
