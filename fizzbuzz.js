/*Players generally sit in a circle. The player designated to go first says the number "1", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by both three and five (i.e. divisible by 15) become fizz buzz. A player who hesitates or makes a mistake is eliminated.

For example, a typical round of fizz buzz would start as follows:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...*/


const limitNumber=50;
const arrayOfNumbersDivisibleBy3 = [];
const arrayOfNumbersDivisibleBy5 = [];

for(let number=1;number<=limitNumber;number++){
    if(number % 3===0 && number % 5===0){
        console.log("FizzBuzz");
    } else if(number % 3===0){
            console.log("Fizz");
        }else if(number % 5===0){
            console.log("Buzz");
        }else{
            console.log(number);
        }
}

/*
    1. sve brojevi upisati u niz koji su deljivi sa 3
    2. te brojeve koji su deljivi sa 3 treba kvadrirati
    3. objekat gde su kljucevi 3 i 5 i kod tri su oni koji se zavrsavaju sa 0 a kod 5 oni koji se zavrsavaju sa 5
*/

for(let number=1;number<=limitNumber;number++){
        if(number % 3===0){
            arrayOfNumbersDivisibleBy3.push(number);
        }
        if(number % 5 ===0){
            arrayOfNumbersDivisibleBy5.push(number);
        }
}
 
console.log("Numbers divisible by 3:");
console.log(arrayOfNumbersDivisibleBy3);

console.log("Numbers divisible by 5:");
console.log(arrayOfNumbersDivisibleBy5);

const squaredNumbersDivisibleBy3 = arrayOfNumbersDivisibleBy3.map((number) => number*number);
console.log("Squared numbers divisible by 3");
console.log(squaredNumbersDivisibleBy3);

/*const numbers= {};
numbers[3]= arrayOfNumbersDivisibleBy3;
numbers[5]= arrayOfNumbersDivisibleBy5;
console.log(numbers);*/


// const stringNumbers= arrayOfNumbersDivisibleBy5.map((number) => number.toString());
//console.log(stringNumbers); 

/*
const cutNumbers=stringNumbers.map((number) => number.slice(-1));
console.log(cutNumbers);*/

const resultReduce = stringNumbers.reduce((acc, number) =>{
    if(number.slice(-1)=== '5'){
        if(acc[5]){
            acc[5].push(+number);
        }else{
            acc[5]=[+number];
        }  
    }
    if(number.slice(-1)=== '0'){
        if(acc[0]){
            acc[0].push(+number);
        }else{
            acc[0]=[+number];
        }  
    }
    return acc;
}, {5: [], 0: []});

console.log(resultReduce);

