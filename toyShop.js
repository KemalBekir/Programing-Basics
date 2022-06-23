function toyShop(input){
    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrice = 2.6;
    let dollsPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalNumToys = puzzles + dolls + bears + minions + trucks;
    let totalSales = (puzzles * puzzlePrice) + (dolls * dollsPrice) + (bears * bearPrice) + (minions * minionPrice) + (trucks * truckPrice);

    if (totalNumToys >= 50){
        totalSales = totalSales - (totalSales * 0.25);        
    }
    totalSales = totalSales - (totalSales * 0.10);

    if (totalSales >= trip){
        console.log(`Yes! ${(totalSales - trip).toFixed(2)} lv left. `);
    }
         else {      
            console.log(`Not enough money! ${(trip - totalSales).toFixed(2)} lv needed.`);
        }


}

toyShop(["320", "8", "2", "5", "5", "1"]);