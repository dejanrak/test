/*
{ 
    example1 : { name: "Goran" , surname: "Jankovic", type:"Student" },
    example2 : { name: "Srdjan" , surname: "Jakovljevic", type:"Nastavnik" },
}
*/

const files = [
    { 
        refId : "example1",
        data : { 
                name: "Goran",
                surname: "Jankovic",
                type : "Student",
            }
    },
    { 
        refId : "example2",
        data : { 
                name: "Srdjan",
                surname: "Jakovljevic",
                type : "Nastavnik",
            }
    },
    { 
        refId : "example3",
        data : { 
                name: "Petar",
                surname: "Stanojevic",
                type : "Student",
            }
    },
    { 
        refId : "example4",
        data : { 
                name: "Slobodan",
                surname: "Jahic",
                type : "Obezbedjenje",
            }
    },
    { 
        refId : "example2",
        data : { 
                name: "Nemanja",
                surname: "Bilic",
                type : "Student",
            }
    },
];

const resultReduce = files.reduce((acc, file) => {
    const key= file.refId;
   
    acc[key]= {...file.data};
  
    return acc;

}, {});

console.log(resultReduce);

const resultReduce2 = files.reduce((acc, file) => {
    const key= file.refId;
    if(acc[key]){
        acc[key].push(file.data);
    } else {
        acc[key]= [file.data];
    }
    return acc;

}, []);

//console.log(resultReduce2);