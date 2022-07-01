function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);

    let result = 0;

    if (season == "Spring") {
        if (count <= 6) {
            result = 3000 * 0.9;
        } else if (count >= 7 && count <= 11) {
            result = 3000 * 0.85;
        } else {
            result = 3000 * 0.75;
        }
        if (count % 2 == 0) {
            result = result * 0.95;
        }

    }

    if (season == "Summer" || season == "Autumn") {
        if (count <= 6) {
            result = 4200 * 0.9;
        } else if (count >= 7 && count <= 11) {
            result = 4200 * 0.85;
        } else {
            result = 4200 * 0.75;
        }
        if (count % 2 == 0 && season != "Autumn") {
            result = result * 0.95;
        }
    }

    if (season == "Winter") {
        if (count <= 6) {
            result = 2600 * 0.9;
        } else if (count >= 7 && count <= 11) {
            result = 2600 * 0.85;
        } else {
            result = 2600 * 0.75;
        }
        if (count % 2 == 0) {
            result = result * 0.95;
        }
    }

    if (budget >= result) {
        let diff = budget - result;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(budget - result);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
    "Summer",
    "11"])
fishingBoat(["3600",
    "Autumn",
    "6"])
fishingBoat(["2000",
    "Winter",
    "13"])
