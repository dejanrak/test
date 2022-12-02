



function checkpalindrome(word){
    
    if(word.length < 1){
        return "Your word is to small!";
    }
    for(let i=0; i< word.length ; i++){
            //console.log(word[i]);
            //console.log(word[word.length-i-1]);
            if(!(word[i] === word[word.length-i-1])){
                return "Your word is not a palindrome!";
            }
        }
    return "Your word is a palindrome!";
}


const wordword="ana voli milovana";



console.log(wordword.replace(/\s/g, '') );
console.log(checkpalindrome(wordword));
