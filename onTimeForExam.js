function onTimeForExam(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutess = Number(input[3]);

    let examTimeInMin = examHour * 60 + examMinutes;
    let arrivalTimeInMin = arrivalHour * 60 + arrivalMinutess;
    let result = 0;
    let h = 0;
    let m = 0;

    if(arrivalTimeInMin > examTimeInMin){
        console.log("Late");
        result = arrivalTimeInMin - examTimeInMin;
        if(result < 60){
            console.log(`${result} minutes after the start`);
        } else {
            h = Math.floor(result / 60);
            m = (result % 60);
            if(m < 10){
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            } 
        }

    } else if (arrivalTimeInMin == examTimeInMin || examTimeInMin - arrivalTimeInMin <= 30){
        console.log("On time");
        result = examTimeInMin - arrivalTimeInMin;
        if(result <=30){
            console.log(`${result} minutes before the start`);
        }
    } else {
        console.log("Early");
        result = examTimeInMin - arrivalTimeInMin;
        if(result < 60 && result > 30){
            console.log(`${result} minutes before the start`);
        } else if (result >= 60){
            h = Math.floor(result / 60);
            m = (result % 60);
            if(m < 10){
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }

}

onTimeForExam(["9",
    "00",
    "8",
    "30"])