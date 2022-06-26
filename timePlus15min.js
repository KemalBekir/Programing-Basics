function timePlus15min(input){
    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalMinutes = h * 60 + m;
    let totalPlus = totalMinutes + 15;

    let finalHours = Math.floor(totalPlus / 60);
    if (finalHours > 23){
        finalHours = 0; 
    }

    let finalMinutes = totalPlus % 60;
    if (finalMinutes < 10){
        console.log(`${finalHours}:0${finalMinutes}`);
    } else
        console.log(`${finalHours}:${finalMinutes}`);
}

timePlus15min(["12", "49"])

