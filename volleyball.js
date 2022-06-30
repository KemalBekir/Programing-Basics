function volleyball(input) {
    let leapOrNormal = input[0];
    let holidays = Number(input[1]);
    let weekeends = Number(input[2]);

    let sofia = 0;
    let totalSofia = 0;
    let gamesTotal = 0;

    sofia = (48 - weekeends) * (3.0 / 4);
    totalSofia = holidays * (2.0 / 3);
    gamesTotal = sofia + weekeends + totalSofia;

    if (leapOrNormal == "leap") {
        gamesTotal = Math.floor((gamesTotal * 0.15) + gamesTotal);
        console.log(gamesTotal);
    } else if (leapOrNormal == "normal") {
        console.log(Math.floor(gamesTotal));
    }

}

