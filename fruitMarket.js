function fruitMarket(input){
    let strawberryPrice = Number(input[0]);
    let bananasInKG = Number(input[1]);
    let orangesInKg = Number(input[2]);
    let raspberryInKg = Number(input[3]);
    let strawberryInKg = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice - (0.4 * raspberryPrice);
    let bananaPrice = raspberryPrice - (0.8 * raspberryPrice);

    let totalRaspberry = raspberryInKg * raspberryPrice;
    let totalOranges = orangesInKg * orangePrice;
    let totalBananas = bananaPrice * bananasInKG;
    let totalStrawberries = strawberryInKg * strawberryPrice;

    let totalSum = totalRaspberry + totalOranges + totalBananas + totalStrawberries;
    console.log(totalSum);
}

