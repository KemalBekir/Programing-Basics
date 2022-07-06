function salary(input) {
    let openTabs = Number(input[0]);
    let income = Number(input[1]);

    let isSalaryLost = false;
    let result = 0;
    let actualSalary = 0;
    let index = 2;

    for (let i = 1; i <= openTabs; i++) {
        let name = input[index];
        index++;
        if (name == "Facebook") {
            income -= 150;
        } else if (name == "Instagram") {
            income -= 100;
        } else if (name == "Reddit") {
            income -= 50;
        }
        if (income <= 0) {
            console.log("You have lost your salary.");
            isSalaryLost = true;
            break;
        }
    }

    if (!isSalaryLost) {
        console.log(income.toFixed(0));
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
