function moving(input){
    let wSpace = Number(input[0]);
    let lSpace = Number(input[1]);
    let hSpace = Number(input[2]);
    let index = 3;
    let availableSpace = wSpace * lSpace * hSpace;

    while(input[index] !== "Done"){
        availableSpace = availableSpace - Number(input[index]);
        if (availableSpace < 0){
            console.log(`No more free space! You need ${availableSpace * -1} Cubic meters more.`);
            break;
        }
        index++;
    }
    if(availableSpace >= 0){
        console.log(`${availableSpace} Cubic meters left.`);
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
moving(["10",
"1",
"2",
"4",
"6",
"Done"])
