/*
    {"id":98,"language":"Swedish","country":"SI"},

                    ||

    98 : { language:Swedish, country:SI, ...} 

*/

const fs= require('fs');
const path = require('path');

try {
    const data=fs.readFileSync(path.join("C:","workfolder","MOCK_DATA.json"),'utf-8');
    const obj = JSON.parse(data);
    

    resultMap = obj.map((object)=> object.id===5 );

    console.log(resultMap);



    /*for(const i=0;i<obj.length;i++){
        const key=(obj[i].id);
        if(obj[key]){
            obj[key].push(obj[i]);
        } 

    }*/
    


    





} catch (error) {
    console.error(error);
}



