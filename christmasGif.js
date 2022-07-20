function christmasGift(input){
    let index = 0;
    let command = input[index]; 
    let kidsCount = 0;
    let adultCount = 0;
    let moneyForToys = 0;
    let sweaterMoney = 0;

    while(command != "Christmas"){
        let tempAge = Number(input[index]);
        index++;

        if(tempAge <= 16){
            kidsCount++;
            moneyForToys += 5;
        } else if(tempAge > 16){
            adultCount++;
            sweaterMoney += 15;
        }
        command = input[index];
    }

    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${sweaterMoney}`);
}

christmasGift(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
christmasGift(["16",
"16",
"16",
"16",
"16",
"Christmas"])
christmasGift(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])
