const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsAge = { child: 0, adult: 0, senior: 0 };
  const ages = entrants.map((element) => element.age);
  ages.forEach((element) => {
    if (element < 18) {
      entrantsAge.child += 1;
    } else if (element >= 50) {
      entrantsAge.senior += 1;
    } else {
      entrantsAge.adult += 1;
    }
  });
  return entrantsAge;
}

function calculateEntry(entrants) {
  // seu código aqui

}

const entrants = [
  { name: 'lara', age: 5 },
  { name: 'frederico', age: 5 },
  { name: 'Pedro', age: 5 },
  { name: 'Maria', age: 18 },
  { name: 'Nubia', age: 18 },
  { name: 'Carlos', age: 50 },
];

console.log(countEntrants(entrants));
// console.log(countEntrants());

// const test = entrants.map((element) => element.age);

// console.log(test);
// console.log(entrantsAge);

module.exports = { calculateEntry, countEntrants };
