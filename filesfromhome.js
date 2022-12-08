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
    const temperary = file.split(/\.(?=[^\.]+$)/);
    var extension = temperary.pop();

    switch (extension) {
        case "html":
            return( 'text/html' );
        case "jpg":
            return( 'text/jpg' );
        case "png":
            return( 'picture/png' );      
        case "gif":
            return( 'picture/gif' );
        case "json":
            return('application/json');
        default:
            return( "That extension doesn't exist!" );
    }
}

function getExtensions (fileNames){
    const newArray = [];
    for(let i=0;i<fileNames.length;i++){
        newArray.push(getExtension(fileNames[i]));
    }
    
    
    return newArray;
}

//console.log(getExtensions(fileNames));

const newObject = {}

for (const fileName of fileNames){
    const ext = getExtension(fileName);
    if(newObject[ext]){
        newObject[ext].push(fileName);
    } else {
        newObject[ext] = [fileName];
        //newObject[ext].push(fileName);
    }
}

console.log(newObject);