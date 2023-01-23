/*
 * -------------------------------------------
 *  Vlasnici kucnih ljubimaca
 * -------------------------------------------
 * Deki: Lesi, Mrki, Carli
 * Djole: Rex, Predo, Carli
 * Natasa: Mile, Pevka
 * Chabi: Cvrle, Pevka
 * Ivan: Mrki
 * Backo: Carli
 * Vladica: Maza
 * -------------------------------------------
 *
 *
 *
 * -------------------------------------------
 * ZADACI
 * -------------------------------------------
 *
 * 1. Za svaku osobu ispisati recenice po sledecem primeru:
 * -------------------------------------------
 * Natasa ima zabu po imenu Mile.
 * Natasa ima pticu po imenu Pevka.
 * -------------------------------------------
 *
 *
 * 2. Za svakog ljubimca ispisati recenice po sledecm primeru:
 * -------------------------------------------
 *  Pticu po imenu Pevka dele: Natasa i Chabi.
 * -------------------------------------------
 *  Kera po imenu Carli dele: Deki, Djole i Backo.
 * -------------------------------------------
 *  Kera, po imenu Rex, Djole ne deli ni sa kim.
 * -------------------------------------------
 *
 */

const people = [
  { id: 1, name: "Deki", age: 27, isMale: true },
  { id: 2, name: "Djole", age: 30, isMale: true },
  { id: 3, name: "Natasa", age: 33, isMale: false },
  { id: 4, name: "Chabi", age: 27, isMale: true },
  { id: 5, name: "Ivan", age: 35, isMale: true },
  { id: 6, name: "Backo", age: 34, isMale: true },
  { id: 7, name: "Vladica", age: 45, isMale: true },
];

const pets = [
  { id: 1, name: "Rex", species: "DOG" },
  { id: 2, name: "Predo", species: "CAT" },
  { id: 3, name: "Lesi", species: "DOG" },
  { id: 4, name: "Mile", species: "FROG" },
  { id: 5, name: "Cvrle", species: "HAMMSTER" },
  { id: 6, name: "Pevka", species: "BIRD" },
  { id: 7, name: "Mrki", species: "DOG" },
  { id: 8, name: "Carli", species: "CAT" },
  { id: 9, name: "Maza", species: "DOG" },
];

const ownershipRelation = [
  { id: 1, ownerId: 1, petId: 3 },
  { id: 2, ownerId: 1, petId: 7 },
  { id: 3, ownerId: 1, petId: 8 },
  { id: 4, ownerId: 2, petId: 1 },
  { id: 5, ownerId: 2, petId: 2 },
  { id: 6, ownerId: 2, petId: 8 },
  { id: 7, ownerId: 3, petId: 4 },
  { id: 8, ownerId: 3, petId: 6 },
  { id: 9, ownerId: 4, petId: 5 },
  { id: 10, ownerId: 4, petId: 6 },
  { id: 11, ownerId: 5, petId: 7 },
  { id: 12, ownerId: 6, petId: 8 },
  { id: 13, ownerId: 7, petId: 9 },
];

const result = ownershipRelation.map((owner) => {
  const filterPeople = people.find((person) => {
    return person.id === owner.ownerId;
  });

  const filterPets = pets.find((pet) => {
    return pet.id === owner.petId;
  });

  return {
    id: owner.id,
    name: filterPeople.name,
    age: filterPeople.age,
    isMale: filterPeople.isMale,
    petName: filterPets.name,
    petSpecies: filterPets.species,
  };
});
//console.log(result);

const resultReduce = result.reduce((acc, person) => {
  const key = person.name;
  if (!acc[key]) {
    acc[key] = [];
  }
  const { petSpecies, petName } = person;
  acc[key].push({ petSpecies, petName });
  return acc;
}, {});

//console.log(resultReduce);

//[TODO] Need to work with all objects

/*const final = Object.entries(resultReduce).map((item) => {
  return `${item[0]} have a ${JSON.stringify(
    item[1][0].petSpecies
  )} with name ${JSON.stringify(item[1][0].petName)}`;
});

console.log(final);*/

const finalResult = result.map((person) => {
  const { name, petName, petSpecies } = person;
  return `${name} ima ${petSpecies} po imenu ${petName}`;
});
//console.log(finalResult);

const resultReduce2 = result.reduce((acc, person) => {
  const key = person.petSpecies;
  if (!acc[key]) {
    acc[key] = [];
  }
  const { name, age, petName } = person;
  acc[key].push({ name, age, petName });
  return acc;
}, {});

//console.log(resultReduce2);

/*for (const property in resultReduce2) {
  console.log(
    `${JSON.stringify(property)} with a name : ${JSON.stringify(
      resultReduce2[property]
    )}`
  );
}*/

const finalResult2 = result.map((person) => {
  const { name, petName, petSpecies } = person;
  return `${name} ima ${petSpecies} po imenu ${petName}`;
});
console.log(finalResult);

const mapPets = pets.map((pet) => {
  const { species, name } = pet;
  const filteredOwnerRelations = ownershipRelation.filter((a) => {
    if (pet.id === a.petId) {
      return true;
    }
  });
  const owners = filteredOwnerRelations.map((ownerRelation) => {
    return people.find((person) => person.id === ownerRelation.ownerId);
  });

  const ownerNames = owners.map((owner) => owner.name);
  if (ownerNames.length === 1) {
    console.log(
      `${species} po imenu ${name}, ${ownerNames} ne deli ni sa kim.`
    );
  } else {
    console.log(`${species} imena ${name} dele osobe:${ownerNames}`);
  }
});

//console.log(mapPets);

/*const peopleMap = people.map((person) => {
  const filterowner = mapPets.filter((pet) => {
    if (person.id === pet.ownerId) {
      return true;
    }
  });
  console.log(filterowner);
  return filterowner;
}, {});

console.log(JSON.stringify(peopleMap));*/
