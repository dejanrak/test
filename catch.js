/*
 * Napraviti funkciju koja prima dva broja i deli ih koristeci devideNumbers funkciju.
 *
 * Vratiti odgovor kao string u formatu:
 * Deljenjem "x" i "y", dobija se "z".
 * (npr. Deljenjem 15 i 3 dobija se 5.)
 *
 * Ukoliko devideNumbers baci gresku, vratiti odgovor:
 * Deljenje brojeva "x" i "y" nije moguce!
 * (npr. Deljenje brojeva 15 i 0 nije moguce!)
 *
 */

function devideNumbers(prvi, drugi) {
	if (drugi === 0) {
		throw new Error("Can't devide with zero");
	}
	return prvi / drugi;
}

function devideNumber(x, y){
    try {

        const z= devideNumbers(x, y);
        //console.log(z);
        return `Deljenjem  ${x} i ${y} dobija se ${z}.`;
      
      } catch (err) {
      
        return `Deljenje brojevima ${x} i ${y} nije moguce!`;
      
      }
}

console.log(devideNumber(15,3));



