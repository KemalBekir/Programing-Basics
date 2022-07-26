function examPreparation(input){
    let badGrades = Number(input[0]);
    let sum = 0;
    let lastExercise = "";
    let index = 1;
    let count = 0;
    let countBadGrades = 0;


    while(badGrades > countBadGrades){
        let currentExercise = input[index];
        index++;
        let currentGrade = Number(input[index]);

        if(currentGrade <= 4){
            sum += currentGrade;
            countBadGrades++;
            count++;
            lastExercise = currentExercise;
        } else if(currentGrade > 4){
            sum += currentGrade;
            count++;
            lastExercise = currentExercise;
        }
        index++;

        if(currentExercise == "Enough"){
            console.log(`Average score: ${(sum/count).toFixed(2)}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${lastExercise}`);
            break;
        } 
         if(countBadGrades == badGrades){
            console.log(`You need a break, ${countBadGrades} poor grades.`);
        }
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])