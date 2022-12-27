const kugle = [
	{ ukus: "jagoda", boja: "crvena", cena: 30 },
	{ ukus: "limun", boja: "bela", cena: 20 },
	{ ukus: "cokolada", boja: "braon", cena: 50 },
	{ ukus: "kruska", boja: "zelena", cena: 45 },
	{ ukus: "mango", boja: "narandzasta", cena: 35 },
	{ ukus: "sumsko voce", boja: "crvena", cena: 55 },
	{ ukus: "vanila", boja: "bela", cena: 10 },
	{ ukus: "pistaci", boja: "zelena", cena: 65 },
];


const narudzbine = [
	{osoba: "Deki",	ukusi: ["jagoda", "pistaci", "limun"]},
	{osoba: "Chabi", ukusi: ["cokolada", "vanila"]},
	{osoba: "Djole", ukusi:  ["limun", "mango", "jagoda", "kruska"]},
	{osoba: "Vladica", ukusi: ["cokolada", "cokolada", "vanila", "cokolada"]},
	{osoba: "Sale", ukusi: ["sumsko voce", "mango", "pistaci", "limun", "vanila"]},
	{osoba: "Natasa", ukusi: ["kruska", "jagoda"]},
	{osoba: "Sanja", ukusi: ["limun", "jagoda"]}
];



//drugi zadatak
const racuni= narudzbine.map((narudzbina)=> {
	//{ osoba: "Deki" , cena:0 }
	const cene=narudzbina.ukusi.map((ukus) => {
		const kugla = kugle.find((kugla) => {return ukus === kugla.ukus});
		return kugla.cena;
	});
	const iznos= cene.reduce((acc, cena) => {
		acc+=cena;
		return acc;
	}, 0);
	return {osoba: narudzbina.osoba, iznos}
});

const najskupljiSladoled= racuni.reduce((acc, racun) => {
	if(racun.iznos> acc.iznos){
		acc= racun;
	}
	return acc;
});

//console.log(najskupljiSladoled);

//console.log(`Najskulji racun napravio je: ${najskupljiSladoled.osoba}`);


/*
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
const racuni2 = narudzbine.map((narudzbina)=> {
	//{ osoba: "Deki" , cena:0 }
	const boje=narudzbina.ukusi.map((ukus) => {
		const kugla = kugle.find((kugla) => {return ukus === kugla.ukus});
		return kugla.boja;
	});
	const iznos= boje.reduce((acc, cena) => {
		acc+=cena;
		return acc;
	}, 0);
	return { osoba: narudzbina.osoba, cena:iznos,  boje:boje }
});


console.log(racuni2);
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