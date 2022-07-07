function histogram(input){
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;

    for(let i = 1; i <= n; i++){
        let num = input[i];
        if (num < 200){
            countP1++;
        } else if(num >= 200 && num < 400){
            countP2++;
        } else if (num >= 400 && num < 600){
            countP3++;
        } else if (num >= 600 && num < 800){
            countP4++;
        } else if (num >= 800){
            countP5++;
        }



    }

    console.log(`${(p1 = (countP1 / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p2 = (countP2 / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p3 = (countP3 / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p4 = (countP4 / n) * 100).toFixed(2) + "%"}`);
    console.log(`${(p5 = (countP5 / n) * 100).toFixed(2) + "%"}`);
    

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])