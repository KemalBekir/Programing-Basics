function spaceship(input){
    let width = Number(input[0]);
    let sLenght = Number(input[1]);
    let height = Number(input[2]);
    let avgHeight = Number(input[3]);

    let area = width * sLenght * height;
    let perPersonArea = (avgHeight + 0.40)*2 * 2;
    let totalAstronauts = Math.floor( area / perPersonArea);

    if(totalAstronauts >=3 && totalAstronauts <= 10){
        console.log(`The spacecraft holds ${totalAstronauts} astronauts.`);
    } else if(totalAstronauts < 3){
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
    
}

spaceship(["3.5",
"4",
"5",
"1.70"])
spaceship(["4.5",
"4.8",
"5",
"1.75"])
spaceship(["3",
"3", 
"4",
"1.68"])
