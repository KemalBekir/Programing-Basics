function sumOfTwoNumbers(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let foundCombination = false;

    for(let i = a; i <= b; i++){
        for(let j = a; j <= b; j++){
            combinations++;
            if(i + j == magicNumber){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${i + j})`);    
                foundCombination = true;
                break;
            }
        }
        if(foundCombination){
            break;
        }
    }

    if (!foundCombination){
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1",
"10",
"5"])
sumOfTwoNumbers(["88",
"888",
"1000"])
sumOfTwoNumbers(["23",
"24",
"20"])
sumOfTwoNumbers(["88", 
"888", 
"2000"])