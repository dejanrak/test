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

const rezultat = {noviObjekat : {}};

for(const fileName of fileNames){
    const ext= getExtensions(fileName);
    if(rezultat[ext]){
        rezultat[ext].push(fileName);
    }else{
        rezultat[ext] = [fileName];
    }
}

console.log(rezultat);



/*const rez = fileNames.reduce((acc, fileName) => {
    const ext= getExtensions(fileName);
    if(acc[ext]){
        acc[ext].push(fileName);
    }else{
        acc[ext] = [fileName];
    }
    return acc;
}, {});

console.log(rez);*/



/*const reduceRez = fileNames.reduce((acc, fileName) => {
    const key= getExtensions(fileName);
    if(acc[key]){
        acc[ext].push(fileName);
    }else{
        acc[ext] = {[fileName], sum};
    }
    return acc;
}, {});

console.log(reduceRez);*/


const rez= fileNames.reduce((acc, fileName) => {

    const key= getExtensions(fileName);
    if(!acc[key]){
        acc[key] = { fileNames:[], count:0 };
    }
    acc[key]["fileNames"].push(fileName);
    acc[key]["count"]+=1; 
    return acc;
}, {});

console.log(rez);
