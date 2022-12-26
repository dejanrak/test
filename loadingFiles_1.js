/*
    !!!!!!!!!!!!!!!!!!!!!!!!

        koda pristupam kijevima unutar objekta pisem [] kada se ki ne menja sa sa navodnicima [""] kada se menja

    !!!!!!!!!!!!!!!!!!!!!!!!


    {"id":98,"language":"Swedish","country":"SI"},

                    ||

    98 : { language:Swedish, country:SI, ...} 

*/

const { log } = require('console');
const { KeyObject } = require('crypto');
const fs= require('fs');
const path = require('path');

try {
    const data=fs.readFileSync(path.join("C:","workfolder","MOCK_DATA.json"),'utf-8');
    const objArray = JSON.parse(data);
    
    

    const rezultat = {};

    

    /*for(let i=0;i<objArray.length;i++){
        const key=objArray[i].id;
        console.log(key);
        const objekat = objArray[i];
        console.log(objekat);
        if(!rezultat[key]){
            rezultat[key] = { countries : [] , languages : [] }
        }
        //if(rezultat[key][countries][])
        set.add(rezultat[key]["countries"].push(objArray[i].country));
        
        set.add(rezultat[key]["languages"].push(objArray[i].language));
        

    }*/

    /*let mySetCountry = new Set();
    let mySetLanguage = new Set();*/

    for(let i=0;i<objArray.length;i++){
        const key=objArray[i].id;

        if(rezultat[key] === undefined){
            rezultat[key] = { mySetCountry : new Set() , mySetLanguage : new Set() }
        }

        rezultat[key]["mySetLanguage"].add(objArray[i].language);
        rezultat[key]["mySetCountry"].add(objArray[i].country);

    }
    
    //console.log(rezultat);


    for(let key in rezultat){
        rezultat[key]["mySetLanguage"]=Array.from(rezultat[key]["mySetLanguage"]);
        rezultat[key]["mySetCountry"]=Array.from(rezultat[key]["mySetCountry"]);
    }

    console.log(rezultat);

    //const nizSpredom = [...rezultat];
    //console.log(nizSpredom);
    

    /*const myArrayCountry = [...mySetCountry];
    const myArrayLanguage = [...mySetLanguage];
    
    console.log(myArrayCountry);
    console.log(myArrayLanguage);*/
   
    
    //console.log(rezultat);





} catch (error) {
    console.error(error);
}