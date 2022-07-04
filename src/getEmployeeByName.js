import zooData from '../data/zoo_data.js';

function getEmployeeByName(name) {
  const object = zooData.employees;
  const employee = object.find((item) => item.firstName === name || item.lastName === name);
  return (typeof employee !== 'undefined' ? employee : {});
}

export default getEmployeeByName;
