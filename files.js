
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


let array=[];

for(let i=0; i < fileNames.length; i++){
    array.push(getExtensions(fileNames[i]));
}


function getExtensions (file){
    let newFile="";
    const extensions = file.split('.').pop();

    if(extensions === "html"){
        newFile = "text/html";
    }
    if(extensions === "png"){
        newFile = "image/png";
    }
    if(extensions === "gif"){
        newFile = "image/gif";
    }
    if(extensions === "json"){
        newFile = "application/json";
    }
    return newFile; 
}

console.log(array);


