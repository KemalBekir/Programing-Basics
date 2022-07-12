function sumOfNumbers(input){
    let num = input[0];
    let digit = 0;
    let result = 0;
    
    for(let i = 0; i < num.length; i++){
        digit = Number(num[i]);
        result =  result + digit;
    }
    console.log(`The sum of the digits is:${result}`);
}

