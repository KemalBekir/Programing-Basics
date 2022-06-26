function scolarship(input){
    let income = Number(input[0]);
    let avgGrade = Number(input[1]);
    let minWage = Number(input[2]);

    let isScolarship = false;
    let scolarshipForExc = false;
    let socMoney = 0;
    let excMoney = 0;

    if(income < minWage){
        isScolarship = true;
    }

    if(avgGrade < 4.50){
        isScolarship = false;
    }
    
    if(isScolarship){
        socMoney = Math.floor(minWage * 0.35);
    }

    if(avgGrade >= 5.50){
        scolarshipForExc = true;
        isScolarship = true;
        excMoney = Math.floor(avgGrade * 25);
    }

    if(!isScolarship){
        console.log("You cannot get a scholarship!");
    } else if (socMoney > excMoney){
        console.log(`You get a Social scholarship ${socMoney} BGN`);
    } else if (excMoney >= socMoney){
        console.log(`You get a scholarship for excellent results ${excMoney} BGN`);
    }



}

scolarship(["480.00",
"4.60",
"450.00"])