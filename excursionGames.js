function excursionGames(input) {
    let index = 0;
    let numPlayers = Number(input[index]);
    index++;
    let wonCount = 0;
    let loseCount = 0;
    let winner = false;

    for (let i = 1; i <= numPlayers; i++) {
        let tempDestination = input[index];
        let sum = 0;
        index++;
        for (let j = 0; j < tempDestination.length; j++) {
            sum = sum + Number(input[index]);
            index++;
        }
        if (sum % tempDestination.length === 0) {
            wonCount++;
            winner = true;
        } else if (sum % tempDestination.length !== 0){
            loseCount++;
            winner = false;
        }
        if (winner) {
            console.log("Win");
        } else if(!winner){
            console.log("Lost");
        }
    }
    
    console.log(`Win: ${((wonCount / numPlayers) * 100).toFixed(2)}%`);
    console.log(`Lost: ${((loseCount / numPlayers) * 100).toFixed(2)}%`);
}

excursionGames(["2",
    "Bali",
    "4",
    "11",
    "4",
    "1",
    "Bora Bora",
    "23",
    "34",
    "65",
    "14",
    "76",
    "34",
    "76",
    "34",
    "98"])
excursionGames([3,
    "Maldives",
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    "Fiji",
    11,
    4,
    85,
    18,
    "Capri",
    54,
    23,
    83,
    34,
    16])
