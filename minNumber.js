function minNumber(input) {
    let n = Number(input[0]);
    let minNum = 0;
    let currentNum = 0;

    for(let i = 1; i<= n; i++){
        currentNum = Number(input[i]);
        if(i == 1){
            minNum = currentNum;
        } else if (currentNum < minNum){
            minNum = currentNum;
        } else {}
    }
    console.log(minNum);
}
minNumber(["4",
    "45",
    "-20",
    "7",
    "99"])
minNumber(["2",
    "100",
    "99"])
minNumber(["3",
    "-10",
    "20",
    "-30"])
minNumber(["2",
    "-1",
    "-2"])
minNumber(["1","999"])
