function newhouse(input){
    let typeOfFlowers = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    
    let result = 0;

    switch (typeOfFlowers){
        case "Roses":
            if(count > 80){
                result = (count * 5) * 0.9;
            } else {
                result = count * 5;
            }
            break;
        case "Dahlias":
            if (count > 90){
                result = (count * 3.8) * 0.85;
            } else {
                result = count * 3.8;
            }
            break;
        case "Tulips":
            if(count > 80){
                result = (count * 2.8) * 0.85;
            } else {
                result = count * 2.8;
            }
            break;
        case "Narcissus":
            if(count < 120){
                result = (count * 3) * 1.15;
            } else {
                result = count * 3;
            }
            break;
        case "Gladiolus":
            if(count < 80){
                result = (count * 2.5) * 1.2;
            }else {
                result = count * 2.5;
            }
            break;
    }

    if(budget - result >= 0){
        let diff = budget - result;
        console.log(`Hey, you have a great garden with ${count} ${typeOfFlowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(budget - result);
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newhouse(["Roses",
"55",
"250"])
newhouse(["Tulips",
"88",
"260"])
newhouse(["Narcissus",
"119",
"360"])
