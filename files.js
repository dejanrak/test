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


//kajbfjkasbjfk
asd

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
        case "deki":
            return "asdasd"
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

const result = fileNames.reduce();



const fileTypes = fileNames.map(file => getExtensions(file));


console.log(fileTypes);


