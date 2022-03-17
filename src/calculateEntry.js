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

function calculateEntry(entrants = 0) {
  if (entrants === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsObject = countEntrants(entrants);

  const total = [
    data.prices.child * entrantsObject.child,
    data.prices.adult * entrantsObject.adult,
    data.prices.senior * entrantsObject.senior,
  ];

  return total.reduce((acc, curl) => acc + curl);
}

module.exports = { calculateEntry, countEntrants };
