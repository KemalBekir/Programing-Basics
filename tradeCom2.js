function commision(argArr) {
    let city = argArr[0];
    let sales = Number(argArr[1]);
    let calculatedCommision = 0;
    let isError = false;
 
    if (sales <= 0) {
        console.log("error");
    } else {
        switch (city) {
            case "Sofia": 
                if (sales <= 500) {
                    calculatedCommision = sales * 0.05;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.07;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.08;
                } else {
                    calculatedCommision = sales * 0.12;
                }
                break;
            case "Varna":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.045;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.075;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.1;
                } else {
                    calculatedCommision = sales * 0.13;
                }
                break;
            case "Plovdiv":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.055;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.08;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.12;
                } else {
                    calculatedCommision = sales * 0.145;
                }
                break;
            default:
                isError = true;
                break;
                
        }
        if (isError) {
            console.log("error");
        } else {
            console.log(calculatedCommision.toFixed(2));
        }
    }
}

commision(["Kaspichan",
"-50"])
commision(["Plovdiv","-20"])
