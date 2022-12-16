/*
 * 2. Napraviti objekat koji ima za kljuc ekstenziju, 
 * a za vrednost listu imena fajlova sa tom ekstenzijom:
 *  npr: {
 *  	"text/html": [ "webstranica.html", "index.html"	], 
 *  	"image/png": ["vladicin_ker.png", "ivan_sladoledzija.png"],
 *  	"image/gif": [ "chabijeva_ikona_igra.gif", "sanja&natasa.gif"],
 *  	"application/json": ["setup_file.json"], 
 *  	... 
 *  	}
 */

/*
 * 3. Kljuc je ime ekstenzije, a vrednost objekat koji sadrzi broj fajlova
 * sa tom ekstenzijom i listu imena fajlova sa tom ekstenzijom
 * {
 *  	"text/html": {
 *  		count: 2,	
 *  		fileNames: ["webstranica.html", "index.html"]
 *  	}, 
 *  	"image/png": {
 *  		count: 2,	
 *  		fileNames: ["vladicin_ker.png", "ivan_sladoledzija.png"]
 *  	},
 *  	"image/gif": {
 *  		count: 2,	
 *  		fileNames: [ "chabijeva_ikona_igra.gif", "sanja&natasa.gif"],
 *  	,}
 *  	"application/json": {
 *  		count: 1,	
 *  		fileNames: ["setup_file.json"], 
 *  	},
 *  	... 
 *  	}
​
 */
const fileNames = [
	"webstranica.html",
	"vladicin_ker.png",
	"chabijeva_ikona_igra.gif",
	"baza_podataka.json",
	"sanja&natasa.gif",
	"setup_file.json",
	"index.html",
	"ivan_sladoledzija.png",
	"sale_open_question.gif",
];

function getExtension (file){
    const extension= file.split(".")[1];
    switch (extension) {
        case "html":
          return "text/html";
        case "png":
          return "image/png";
        case "gif":
          return "image/gif";
        case "json":
          return "application/json";
        default:
          return "I don't know such extension";
      }
}


const files = fileNames.map((fileName)=> getExtension(fileName));

const fileReduces= fileNames.reduce((acc, fileName) => {
    const key= getExtension(fileName);
    if(acc[key]){
        acc[key].push(fileName);
    } else {
        acc[key]= [fileName];
    }
    return acc;
}, {});



const result= fileNames.reduce((acc, fileName) => {
    const key=getExtension(fileName);
    if(!acc[key]){
        acc[key]={ fileName : [], count: { number:0 } };
    }
    acc[key]["fileName"].push(fileName);
    acc[key]["count"]["number"]+=1;
    return acc;
} ,{});

console.log(result);