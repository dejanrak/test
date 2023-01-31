type Airport = {
  idPutnika: number;
  airportName: string;
  airportCountry: string;
  flightDestination: string;
  airportElevation: string;
};

type Person = {
  id: number;
  firstName: string;
  gender: string;
  jobTitle: string;
  creditCard: string;
};

const airport: Airport[] = [
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

const people: Person[] = [
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

function firstTaskSecondWay(arrayOfIds: Airport[], idPutnika: number) {
  const selected = arrayOfIds.find((item, index) => {
    console.log(index, item);
    if (item.idPutnika === idPutnika) {
      return item;
    }
  });
  return selected?.flightDestination;
}

//console.log(firstTaskSecondWay(airport, 3));

//drugi zadatak

function secondTask(arrayOfPeople: Person[], idPutnika: number) {
  const selected = arrayOfPeople.find((item, index) => {
    console.log(index, item);
    if (item.id === idPutnika) {
      return item;
    }
  });
  return selected?.firstName;
}

//console.log(secondTask(people, 2));

//treci zadatak

const resultMap = airport.map((airport) => {
  const peopleFind = people.find((person) => {
    return person.id === airport.idPutnika;
  });
  return { id: airport.idPutnika, firstName: peopleFind?.firstName };
});

console.log(resultMap);
