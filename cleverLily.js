function cleverLily(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let numToys = 0
    let moneySaved = 0;


    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
          money += 10;
          moneySaved = moneySaved + money;
          moneySaved--;
        } else {
            numToys++;
        }

    }
    moneySaved += numToys * toyPrice;
    if (moneySaved >= priceWashingMachine) {
        console.log(`Yes! ${(moneySaved - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - moneySaved).toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"])
cleverLily(["21", "1570.98", "3"])