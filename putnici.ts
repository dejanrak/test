type typeOfAirport = {
  id: number;
  name: string;
  location: string;
};

type typeOfPassengers = {
  id: number;
  name: string;
  surname: string;
  jmbg: string;
};

type typeOfTickets = {
  id: number;
  idAirport: number;
  idPassenger: number;
};

const airports: typeOfAirport[] = [
  {
    id: 1,
    name: "Deki Aerodrom",
    location: "Beograd",
  },
];

const passengers: typeOfPassengers[] = [
  {
    id: 1,
    name: "Marko",
    surname: "Markovic",
    jmbg: "0405991020510",
  },
];

const tickets: typeOfTickets[] = [
  {
    id: 1,
    idAirport: 1,
    idPassenger: 1,
  },
];

const ticketNumber: number = 1;
const ticketOfPerson: any = tickets.find(
  (ticket) => ticket.id === ticketNumber
);

function generateTickets(ticketOfPerson: any) {
  const airport = airports.find(
    (airport) => airport.id === ticketOfPerson.idAirport
  );
  const passenger = passengers.find(
    (passenger) => passenger.id === ticketOfPerson.idPassenger
  );
  return {
    id: ticketOfPerson.id,
    aeroName: airport?.name,
    aeroLocation: airport?.location,
    passengerName: passenger?.name,
    passengerJMBG: passenger?.jmbg,
  };
}

console.log(generateTickets(ticketOfPerson));
