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
                type : "Obezbeljenje",
            }
    },
    { 
        refId : "example5",
        data : { 
                name: "Nemanja",
                surname: "Bilic",
                type : "Student",
            }
    },
];


/*output

{ 
    example1 : { name: "Goran" , surname: "Jankovic", type:"Student" },
    example2 : { name: "Srdjan" , surname: "Jakovljevic", type:"Nastavnik" },
}

*/

const newObject = {};

for (const file of files){
    const key= file.refId;
    newObject[key] = { "name" :file.data.name , "surname" : file.data.surname, "type" : file.data.type };
    
}

console.log(newObject);

//bez fora i bez name, surname i type(recimo da ne znam sta su kijevi)