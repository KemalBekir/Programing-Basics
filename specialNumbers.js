function specialNumbers(input){
    let num = Number(input[0]);
    let result = "";
    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0){
                         result = result + a + b + c + d + " ";
                    }
                }
            }
        }
    }
    console.log(result);
}

specialNumbers(["3"])
specialNumbers(["11"])
specialNumbers(["16"])