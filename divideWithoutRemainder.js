function divideWithoutRemainder(input) {
    let n = Number(input[0]);
    let numbers = Number(input[1])

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;


    for (let i = 0; i < n; i++) {
        let num = Number(input[i+1]);
        if (num % 2 == 0) {
            p1Counter++;
            
        }
        if (num % 3 == 0) {
            p2Counter++;
        }
        if (num % 4 == 0) {
            p3Counter++;

        }


    }
    console.log(`${(p1 = (p1Counter / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p2 = (p2Counter / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p3 = (p3Counter / n) * 100).toFixed(2) + "%"}`);

}


divideWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])