function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let accomodation;
    let destination;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            accomodation = "Camp";
            budget = budget * 0.3;
        } else if (season == "winter") {
            accomodation = "Hotel";
            budget = budget * 0.7;
        }
    }

    if (budget <= 1000 && budget > 100) {
        destination = "Balkans";
        if (season == "summer") {
            accomodation = "Camp";
            budget = budget * 0.4;
        } else {
            accomodation = "Hotel";
            budget = budget * 0.8;
        }
    }
    if (budget > 1000) {
        destination = "Europe";
        accomodation = "Hotel";
        budget = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${budget.toFixed(2)}`);

}
