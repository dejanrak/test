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

function getExtensions (file){
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

console.log(getExtensions("deki.app"));
