/*Players generally sit in a circle. The player designated to go first says the number "1", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by both three and five (i.e. divisible by 15) become fizz buzz. A player who hesitates or makes a mistake is eliminated.

For example, a typical round of fizz buzz would start as follows:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...*/


const limitNumber=45;

for(let number=1;number<=limitNumber;number++){
    if(number % 3===0 && number % 5===0){
        console.log("FizzBuzz");
    } else {
        if(number % 3===0){
            console.log("Fizz");
        }else{
            if(number % 5===0){
            console.log("Buzz");
        }else{
            console.log(number);
            }
        }
    }
}

