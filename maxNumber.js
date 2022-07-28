function maxNumber(input){
    let userInput = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while(userInput !== "Stop"){
        let number = Number(userInput);
        if(number < min){
            min = number;
        }
        userInput = input[index];
        index++;
    }
    console.log(min);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])

maxNumber(["-10",
"20",
"-30",
"Stop"])

maxNumber(["45",
"-20",
"7",
"99",
"Stop"])

maxNumber (["999",
"Stop"])
maxNumber(["-1",
"-2",
"Stop"])
 