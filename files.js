function getExtensions (file){
    const extensions = file.split('.').pop();
    switch (extensions) {
        case "html":
            return "text/html";
        case "png":
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



const fileTypes = fileNames.map(file => getExtensions(file));


console.log(fileTypes);


