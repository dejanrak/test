/*
    1* Trevor : [{marke_automobila:"Porshe"}]

    2* Ispisati ime vlasnika i podatke najstarijeg automobila
    
    3 * Ispisati osobe koji voze Hyundai
      * Ispisati osobe koji voze Porsche
      * ispisati sve ostale
    
    4 * Trevor : [{cena voznog parka: 4500}]

    5 * vrati one kojima je vozni park skuplji od 3000
*/
var automobili = [
    {
        Marke_automobila: "Porsche",
        Model_automobila: "Boxster",
        Godina_proizvodnje: 2000,
        Broj_sasije: "KMHHT6KD5CU947265",
        cena: 4500,
        idVlasnika: 1
    },
    {
        Marke_automobila: "Chevrolet",
        Model_automobila: "Colorado",
        Godina_proizvodnje: 2011,
        Broj_sasije: "WAUJC58E83A685403",
        cena: 2100,
        idVlasnika: 2
    },
    {
        Marke_automobila: "Ford",
        Model_automobila: "Ranger",
        Godina_proizvodnje: 1986,
        Broj_sasije: "WBABW53445P020797",
        cena: 2200,
        idVlasnika: 7
    },
    {
        Marke_automobila: "Mercury",
        Model_automobila: "Tracer",
        Godina_proizvodnje: 1989,
        Broj_sasije: "1FTFW1E82AF659917",
        cena: 1800,
        idVlasnika: 4
    },
    {
        Marke_automobila: "GMC",
        Model_automobila: "Savana 2500",
        Godina_proizvodnje: 1998,
        Broj_sasije: "2G4WC582171073067",
        cena: 1600,
        idVlasnika: 2
    },
    {
        Marke_automobila: "BMW",
        Model_automobila: "1 Series",
        Godina_proizvodnje: 2009,
        Broj_sasije: "1N4AL2APXCN382778",
        cena: 3200,
        idVlasnika: 5
    },
    {
        Marke_automobila: "Mitsubishi",
        Model_automobila: "Mighty Max",
        Godina_proizvodnje: 1996,
        Broj_sasije: "2G4GS5EC5B9681981",
        cena: 1500,
        idVlasnika: 8
    },
    {
        Marke_automobila: "Chrysler",
        Model_automobila: "200",
        Godina_proizvodnje: 2011,
        Broj_sasije: "WA1AY74L57D768810",
        cena: 2200,
        idVlasnika: 10
    },
    {
        Marke_automobila: "Toyota",
        Model_automobila: "Yaris",
        Godina_proizvodnje: 2009,
        Broj_sasije: "WBABS33413P365234",
        cena: 1500,
        idVlasnika: 15
    },
    {
        Marke_automobila: "Hyundai",
        Model_automobila: "Accent",
        Godina_proizvodnje: 2002,
        Broj_sasije: "WBAPH5C55BF434715",
        cena: 2250,
        idVlasnika: 10
    },
    {
        Marke_automobila: "Honda",
        Model_automobila: "Prelude",
        Godina_proizvodnje: 1997,
        Broj_sasije: "WAUKF78E58A231320",
        cena: 2000,
        idVlasnika: 15
    },
    {
        Marke_automobila: "Hyundai",
        Model_automobila: "Azera",
        Godina_proizvodnje: 2006,
        Broj_sasije: "WBAWL73538P479709",
        cena: 1000,
        idVlasnika: 14
    },
    {
        Marke_automobila: "Cadillac",
        Model_automobila: "Escalade EXT",
        Godina_proizvodnje: 2005,
        Broj_sasije: "5J6TF3H56FL699598",
        cena: 500,
        idVlasnika: 12
    },
    {
        Marke_automobila: "Saturn",
        Model_automobila: "Ion",
        Godina_proizvodnje: 2004,
        Broj_sasije: "3GYFK66N86G078969",
        cena: 1500,
        idVlasnika: 13
    },
    {
        Marke_automobila: "Bentley",
        Model_automobila: "Continental",
        Godina_proizvodnje: 2009,
        Broj_sasije: "TRUTX28N321365652",
        cena: 3000,
        idVlasnika: 7
    },
];
var osobe = [
    {
        id: 1,
        ime: "Trevor",
        prezime: "Gepheart",
        brojKartice: "3586793913119737"
    },
    { id: 2, ime: "Johan", prezime: "Peter", brojKartice: "3532926457621784" },
    { id: 3, ime: "Alon", prezime: "Skill", brojKartice: "5602247428193955" },
    { id: 4, ime: "Tomaso", prezime: "Soldner", brojKartice: "3577202680248225" },
    {
        id: 5,
        ime: "Alvie",
        prezime: "Rosenbaum",
        brojKartice: "5893978567119604444"
    },
    {
        id: 6,
        ime: "Wash",
        prezime: "Basnett",
        brojKartice: "6771927415188557383"
    },
    {
        id: 7,
        ime: "Torrance",
        prezime: "Stobbe",
        brojKartice: "560224071885747802"
    },
    { id: 8, ime: "Eddy", prezime: "Vernay", brojKartice: "374622631015996" },
    { id: 9, ime: "Rem", prezime: "Firpo", brojKartice: "30260497208383" },
    { id: 10, ime: "Evin", prezime: "Shynn", brojKartice: "3567238482303059" },
    { id: 11, ime: "Demetre", prezime: "Twitty", brojKartice: "372301247496849" },
    {
        id: 12,
        ime: "Whitney",
        prezime: "Learoyde",
        brojKartice: "5641829963105424869"
    },
    {
        id: 13,
        ime: "Jermain",
        prezime: "O'Deoran",
        brojKartice: "5602252301692107"
    },
    {
        id: 14,
        ime: "Malachi",
        prezime: "Le Maitre",
        brojKartice: "6761523955981898616"
    },
    { id: 15, ime: "Ave", prezime: "Fairlam", brojKartice: "3570500543296118" },
];
//prvi zadatak
var mapaOsoba = osobe.reduce(function (acc, osoba) {
    var id = osoba.id, ime = osoba.ime, prezime = osoba.prezime, brojKartice = osoba.brojKartice;
    //@ts-ignore
    var mapAutomobila = automobili
        .filter(function (automobil) { return id === automobil.idVlasnika; })
        .map(function (automobil) {
        return {
            marka: automobil.Marke_automobila,
            model: automobil.Model_automobila
        };
    });
    acc[ime] = { id: id, prezime: prezime, brojKartice: brojKartice, mapAutomobila: mapAutomobila };
    return acc;
}, {});
//console.log(JSON.stringify(mapaOsoba));
// drugi zadatak
var najstarijiAutomobil = automobili.reduce(function (acc, automobil) {
    if (automobil.Godina_proizvodnje < acc.Godina_proizvodnje) {
        acc = automobil;
    }
    return acc;
}, automobili[0]);
var personWithOldestCar = osobe.filter(function (osoba) {
    if (osoba.id === najstarijiAutomobil.idVlasnika) {
        return true;
    }
});
/*console.log(
  `Ime vlasnika:${personWithOldestCar[0]?.ime},

  Prezime vlasnika: ${personWithOldestCar[0]?.prezime},

  Automobil vlasnika: ${JSON.stringify(najstarijiAutomobil)}`
);*/
// treci zadatak
var rezultatTreceg = osobe.reduce(function (acc, osoba) {
    var id = osoba.id, ime = osoba.ime, prezime = osoba.prezime, brojKartice = osoba.brojKartice;
    var mapaAutomobila = automobili
        .filter(function (automobil) { return id === automobil.idVlasnika; })
        .map(function (automobil) {
        return automobil.Marke_automobila;
    });
    //console.log(mapaAutomobila);
    if (mapaAutomobila.includes("Hyundai")) {
        acc.hyundai.push(ime);
    }
    else if (mapaAutomobila.includes("Porsche")) {
        acc.porsche.push(ime);
    }
    else {
        acc.ostali.push(ime);
    }
    return acc;
}, {
    hyundai: [],
    porsche: [],
    ostali: []
});
//console.log(rezultatTreceg);
// cetvrti zadatak
var rezultatCetvrtog = osobe.map(function (osoba) {
    var sumaSvihAutomobila = automobili
        .filter(function (automobil) { return osoba.id === automobil.idVlasnika; })
        .reduce(function (acc, automobil) {
        acc += automobil.cena;
        return acc;
    }, 0);
    return { ime: osoba.ime, CenaVoznogParka: sumaSvihAutomobila };
});
console.log(rezultatCetvrtog);
// peti zadatak
var rezultatPetog = rezultatCetvrtog.filter(function (osoba) { return osoba.CenaVoznogParka > 3000; });
console.log(rezultatPetog);
