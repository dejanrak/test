var airports = [
    {
        id: 1,
        name: "Deki Aerodrom",
        location: "Beograd"
    },
];
var passengers = [
    {
        id: 1,
        name: "Marko",
        surname: "Markovic",
        jmbg: "0405991020510"
    },
];
var tickets = [
    {
        id: 1,
        idAirport: 1,
        idPassenger: 1
    },
];
var ticketNumber = 1;
var ticketOfPerson = tickets.find(function (ticket) { return ticket.id === ticketNumber; });
console.log(ticketOfPerson);
function generateTickets(ticketOfPerson) {
    var airport = airports.find(function (airport) { return airport.id === ticketOfPerson.idAirport; });
    var passenger = passengers.find(function (passenger) { return passenger.id === ticketOfPerson.idPassenger; });
    return {
        id: ticketOfPerson.id,
        aeroName: airport === null || airport === void 0 ? void 0 : airport.name,
        aeroLocation: airport === null || airport === void 0 ? void 0 : airport.location,
        passengerName: passenger === null || passenger === void 0 ? void 0 : passenger.name,
        passengerJMBG: passenger === null || passenger === void 0 ? void 0 : passenger.jmbg
    };
}
console.log(generateTickets(ticketOfPerson));
