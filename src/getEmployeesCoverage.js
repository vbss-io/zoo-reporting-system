import zooData from '../data/zoo_data.js';

function getAnimalsOrLocation(ids, key) {
  const currentAnimals = [];
  ids.forEach((id) => {
    currentAnimals.push(zooData.species.find((item) => item.id === id)[key]);
  });
  return currentAnimals;
}

function checkEmployee(currentEmployee) {
  if (currentEmployee) {
    return currentEmployee;
  }
  throw new Error('Informações inválidas');
}

function getAllEmployees(currentEmployee) {
  const allEmployees = [];
  currentEmployee.forEach((employee) => {
    allEmployees.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getAnimalsOrLocation(employee.responsibleFor, 'name'),
      locations: getAnimalsOrLocation(employee.responsibleFor, 'location'),
    });
  });
  return allEmployees;
}

function getEmployeesCoverage(search = null) {
  const { employees } = zooData;
  if (search) {
    const { name, id } = search;
    const currentEmployee = employees
      .find((employee) => employee.firstName === name
        || employee.lastName === name || employee.id === id);
    const verifiedEmployee = checkEmployee(currentEmployee);
    return [{
      id: verifiedEmployee.id,
      fullName: `${verifiedEmployee.firstName} ${verifiedEmployee.lastName}`,
      species: getAnimalsOrLocation(verifiedEmployee.responsibleFor, 'name'),
      locations: getAnimalsOrLocation(verifiedEmployee.responsibleFor, 'location'),
    }];
  }
  return getAllEmployees(employees);
}

export default getEmployeesCoverage;
