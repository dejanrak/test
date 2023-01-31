var airport = [
  {
    idPutnika: 1,
    airportName: "Matsapha Airport",
    airportCountry: "SZ",
    flightDestination: "SZ-MA",
    airportElevation: "2075",
  },
  {
    idPutnika: 2,
    airportName: "Waverney Airport",
    airportCountry: "AU",
    flightDestination: "AU-QLD",
    airportElevation: "570",
  },
  {
    idPutnika: 3,
    airportName: "Greenbrier Airport",
    airportCountry: "US",
    flightDestination: "US-WV",
    airportElevation: "1795",
  },
];
var people = [
  {
    id: 1,
    firstName: "Franklyn",
    gender: "M",
    jobTitle: "Mechanical Systems Engineer",
    creditCard: "3538777161083470",
  },
  {
    id: 2,
    firstName: "Alvina",
    gender: "F",
    jobTitle: "Internal Auditor",
    creditCard: "3530784496800055",
  },
  {
    id: 3,
    firstName: "Isadora",
    gender: "F",
    jobTitle: "Health Coach III",
    creditCard: "4917041222978007",
  },
];
//prvi zadarak
function firstTaskSecondWay(arrayOfIds, idPutnika) {
  var selected = arrayOfIds.find(function (item, index) {
    console.log(index, item);
    if (item.idPutnika === idPutnika) {
      return item;
    }
  });
  return selected === null || selected === void 0
    ? void 0
    : selected.flightDestination;
}
console.log(firstTaskSecondWay(airport, 3));
//drugi zadatak
function secondTask(arrayOfPeople, idPutnika) {
  var selected = arrayOfPeople.find(function (item, index) {
    console.log(index, item);
    if (item.id === idPutnika) {
      return item;
    }
  });
  return selected === null || selected === void 0 ? void 0 : selected.firstName;
}
console.log(secondTask(people, 2));
//treci zadatak
var resultMap = airport.map(function (airport) {
  var peopleFind = people.find(function (person) {
    return person.id === airport.idPutnika;
  });
  return {
    id: airport.idPutnika,
    firstName:
      peopleFind === null || peopleFind === void 0
        ? void 0
        : peopleFind.firstName,
  };
});
console.log(resultMap);
