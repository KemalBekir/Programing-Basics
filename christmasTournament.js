function christmasTournament(input) {
    let lostCount = 0;
    let wonCount = 0;
    let moneyWon = 0;
    let totalWins = 0;
    let totalLosses = 0;
    let result = " ";
    let wonInDay = 0;

    for (let i = 1; i < input.length; i++) {
        let sport = input[i];
        i++;

        while (input[i] != "Finish") {
         
            result = input[i];
            i++;
            if (result == "win") {
                wonCount++;
                moneyWon += 20;
            } else if (result == "lose") {
                moneyWon += 0;
                lostCount++;
            }
           
        }
        result = input[i];
        if (result == "Finish") {
            if (wonCount > lostCount) {
                moneyWon *= 1.1;
                wonInDay += moneyWon;
                totalWins++;
            } else {
                moneyWon = wonCount * 20;
                wonInDay += moneyWon;
                totalLosses++;
            }
        }
        moneyWon = 0;
        wonCount = 0;
        lostCount = 0;

    }

    if (totalWins > totalLosses) {
        wonInDay *= 1.2;
        console.log(`You won the tournament! Total raised money: ${wonInDay.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${wonInDay.toFixed(2)}`);
    }

}

// christmasTournament(["2",
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"])
christmasTournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])