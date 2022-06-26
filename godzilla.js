function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.10;
    
    if(extras > 150){
        clothesPrice = clothesPrice * 0.90;
    }

    let totalForClothing = clothesPrice * extras;
    let totalBudget = totalForClothing + decor;
    let diff = budget - totalBudget;

    if(diff >= 0){
        diff = Math.abs(diff);
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        diff = Math.abs(diff);
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
}