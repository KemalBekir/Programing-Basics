function graduationPt2(input) {
    let name = input[0];
    let year = 1;
    let gradeCount = 0;
    let failCount = 0;
    let sum = 0;

    while (year <= 12) {
        let grade = Number(input[year]);
        year++;
        if (grade >= 4) {
            gradeCount++;
            sum += grade;
        } else {
            failCount++;
            if (failCount > 1) {
                console.log(`${name} has been excluded at ${gradeCount+1} grade`);
                break;
            }
        }
    }
    if (gradeCount == 12) {
        console.log(`${name} graduated. Average grade: ${(sum / gradeCount).toFixed(2)}`);
    }
}


graduationPt2(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
graduationPt2(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

