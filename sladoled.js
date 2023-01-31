/*
"start": "tsc zaBrisanje.ts --lib es6 dom && node zaBrisanje.js"
 * 1)
 * Napraviti niz racuna (objekata), u kom je kljuc ime osobe, a vrednost objekat koji ima sledeca polja:
 * cena: zbir cena narucenih kugli
 * boja: niz boja kugli (sa tacnim redosledom)
 *
 * npr:
 * const racuni = {
 * "Deki": { cena: 115, boja: ["crvena", "zelena", "bela"] },
 * ...
 * };
 *
 */

/*const racuni2= [
	{ osoba: "Deki",  cena: 115, boja: ["crvena", "zelena", "bela"] },
	{ osoba: "Sale",  cena: 115, boja: ["crvena", "zelena", "bela"]}, 
];*/

/*
 * 2) Ispisati ko je kupio najskuplji sladoled i koliko ga je platio
 */

/*
 * 3) Podeliti osobe u 3 vrste:
 * 1. Oni kojima su sve kugle vocne
 * 2. Oni kojima sve kugle nisu vocne
 * 3. Oni koji imaju mesavinu vocnih i ne vocnih kugli u svom sladoledu
 *
 * P.S. Sam izaberi da li kuglu smatras vocnom ili ne, u zavisnosti od ukusa kugle :)
 */

const kugle = [
  { ukus: "jagoda", boja: "crvena", cena: 30, jeVocni: true },
  { ukus: "limun", boja: "bela", cena: 20, jeVocni: true },
  { ukus: "cokolada", boja: "braon", cena: 50, jeVocni: false },
  { ukus: "kruska", boja: "zelena", cena: 45, jeVocni: true },
  { ukus: "mango", boja: "narandzasta", cena: 35, jeVocni: true },
  { ukus: "sumsko voce", boja: "crvena", cena: 55, jeVocni: true },
  { ukus: "vanila", boja: "bela", cena: 10, jeVocni: false },
  { ukus: "pistaci", boja: "zelena", cena: 65, jeVocni: false },
];

const narudzbine = [
  { osoba: "Deki", ukusi: ["jagoda", "pistaci", "limun"] },
  { osoba: "Chabi", ukusi: ["cokolada", "vanila"] },
  { osoba: "Djole", ukusi: ["limun", "mango", "jagoda", "kruska"] },
  { osoba: "Vladica", ukusi: ["cokolada", "cokolada", "vanila", "cokolada"] },
  {
    osoba: "Sale",
    ukusi: ["sumsko voce", "mango", "pistaci", "limun", "vanila"],
  },
  { osoba: "Natasa", ukusi: ["kruska", "jagoda"] },
  { osoba: "Sanja", ukusi: ["limun", "jagoda"] },
];

const mapaKugli = kugle.reduce((acc, kugla) => {
  const { ukus, boja, cena, jeVocni } = kugla;
  acc[ukus] = { boja, cena, jeVocni };
  return acc;
}, {});

//console.log(mapaKugli);

//prvi zadatak
const racuni2 = narudzbine.map((narudzbina) => {
  const { osoba, ukusi } = narudzbina;
  const boje = ukusi.map((ukus) => mapaKugli[ukus].boja);
  const cene = ukusi.map((ukus) => {
    return mapaKugli[ukus].cena;
  });
  const iznos = cene.reduce((acc, cena) => {
    acc += cena;
    return acc;
  }, 0);
  return { osoba, cena: iznos, boje: boje };
});

console.log(racuni2);

//drugi zadatak
const racuni = narudzbine.map((narudzbina) => {
  const { osoba, ukusi } = narudzbina;
  const cene = ukusi.map((ukus) => {
    return mapaKugli[ukus].cena;
  });
  const iznos = cene.reduce((acc, cena) => {
    acc += cena;
    return acc;
  }, 0);
  return { osoba, iznos };
});

const najskupljiSladoled = racuni.reduce((acc, racun) => {
  if (racun.iznos > acc.iznos) {
    acc = racun;
  }
  return acc;
});

//console.log(najskupljiSladoled);

//console.log(`Najskulji racun napravio je: ${najskupljiSladoled.osoba}`);

//drugi zadatak na treci nacin
const racuni3 = narudzbine.map((narudzbina) => {
  const { osoba, ukusi } = narudzbina;
  const resultReduce = ukusi.reduce((acc, ukus) => {
    acc += mapaKugli[ukus].cena;
    return acc;
  }, {});
  return { osoba, resultReduce };
});

const najskupljiSladoled2 = racuni.reduce((acc, racun) => {
  if (racun.iznos > acc.iznos) {
    acc = racun;
  }
  return acc;
});

console.log(najskupljiSladoled2);

console.log(`Najskulji racun napravio je: ${najskupljiSladoled2.osoba}`);

//treci zadatak

const rezultat = narudzbine.reduce(
  (acc, narudzbina) => {
    const brojSvihKugli = narudzbina.ukusi.length;
    const brojVocnihKugli = narudzbina.ukusi.filter(
      (ukus) => mapaKugli[ukus].jeVocni
    ).length;

    if (brojSvihKugli === brojVocnihKugli) {
      acc.vocni.push(narudzbina.ukusi);
    } else if (brojVocnihKugli === 0) {
      acc.nijeVocni.push(narudzbina.ukusi);
    } else {
      acc.mesani.push(narudzbina.ukusi);
    }
    return acc;
  },
  { vocni: [], nijeVocni: [], mesani: [] }
);

console.log(rezultat);

//prebacivanje fajla na develop
