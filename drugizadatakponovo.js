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
    "dekideki.jpg"
];

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
            return "keydoesntexist";
    }
}

const rezultat = {};

for(const fileName of fileNames){
    const ext= getExtensions(fileName);
    if(rezultat[ext]){
        rezultat[ext].push(fileName);
    }else{
        rezultat[ext] = [fileName];
    }
}

console.log(rezultat);
