import getSpeciesByIds from './src/getSpeciesByIds.js';
import getAnimalsOlderThan from './src/getAnimalsOlderThan.js';
import getEmployeeByName from './src/getEmployeeByName.js';
import getRelatedEmployees from './src/getRelatedEmployees.js';
import countAnimals from './src/countAnimals.js';
import calculateEntry from './src/calculateEntry.js';
import getAnimalMap from './src/getAnimalMap.js';
import getSchedule from './src/getSchedule.js';
import getOldestFromFirstSpecies from './src/getOldestFromFirstSpecies.js';
import getEmployeesCoverage from './src/getEmployeesCoverage.js';

// animals example ids
const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';
// employees example ids
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';

console.log('getSpeciesByIds Demo:');
// parameters options are: empty, one or more ids
console.log(getSpeciesByIds(lionId, tigersId));

console.log('getAnimalsOlderThan Demo:');
// parameters options are: name of species and age in years
console.log(getAnimalsOlderThan('otters', 7));

console.log('getEmployeeByName Demo:');
// parameters options are: empty, first name or last name of employee
console.log(getEmployeeByName('Emery'));

console.log('getRelatedEmployees Demo:');
// parameters options are: id of employee
console.log(getRelatedEmployees(stephanieId));

console.log('countAnimals Demo:');
// parameters options are: empty (return all species), object witch name of species and optional sex
console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

console.log('calculateEntry Demo:');
// parameters options are: empty or array with visitors
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
console.log(calculateEntry(entrants));

console.log('getAnimalMap Demo:');
// parameters options are:
// 1) empty - return all animals species by location
// 2) includeNames: true - return all animals by location including names
// 3) sex: 'female' or 'male' - return only the sex selected animals by location (only with includeNames: true)
// 4) sorted: true - return all animals by location sorted by name (only with includeNames: true)
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

console.log('getSchedule Demo:');
// parameters options are: empty (return all days and animals), weekday and animal name
console.log(getSchedule('lions'));

console.log('getOldestFromFirstSpecies Demo:');
// parameters options are: employee id
console.log(getOldestFromFirstSpecies(olaId));

console.log('getEmployeesCoverage Demo:');
// parameters options are: empty (return all employees), first name, last name or id of employee
// 1) empty - return all employees
// 2) name: 'exampleName' or id: 'exampleId'
console.log(getEmployeesCoverage({ id: stephanieId }));
