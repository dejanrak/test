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

function getExtensions (file){
    const extensions = file.split('.').pop();
    switch (extensions) {
        case "html":
            return "text/html";
        case "png":
            //jhasgfhasgfhgas
            return "image/png";
        case "gif":
            return "image/gif";
        case "json":
            return "application/json";
        default: 
            return "";
    }
}

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


const result = {};

for (const fileName of fileNames) {
    const ext = getExtensions(fileName);
    console.log(ext);
    if (result[ext]) {
        result[ext].push(fileName);
    } else {
        result[ext] = [fileName];
    }
}
console.log(result);

/*const resultReduced = fileNames.reduce((acc, fileName) => {
    const ext = getExtensions(fileName);
    if (acc[ext]) {
        acc[ext].push(fileName);
    } else {
        acc[ext] = [fileName];
    }
    return acc;
}, {});
console.log(resultReduced);*/

