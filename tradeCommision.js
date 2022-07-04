function tradeCommision(input){
    let city = input[0];
    let sales = Number(input[1]);
    let commision = 0;
    let isError = false;

    if(sales <= 0){
        console.log("error");
        return;
    } else {
        switch (city){
            case "Sofia":
                if(sales <= 500){
                    commision = sales * 0.05;
                } else if(sales >= 500 && sales <= 1000){
                    commision = sales * 0.07;
                } else if (sales >= 1000 && sales <= 10000){
                    commision = sales * 0.08;
                } else if (sales > 10000){
                    commision = sales * 0.12;
                }
                break;
            case "Varna":
                if(sales <= 500){
                    commision = sales * 0.045   ;
                } else if(sales >= 500 && sales <= 1000){
                    commision = sales * 0.075;
                } else if (sales >= 1000 && sales <= 10000){
                    commision = sales * 0.10;
                } else if (sales > 10000){
                    commision = sales * 0.13;
                }
                break;
            case "Plovdiv":
                if(sales <= 500){
                    commision = sales * 0.055;
                } else if(sales >= 500 && sales <= 1000){
                    commision = sales * 0.08;
                } else if (sales >= 1000 && sales <= 10000){
                    commision = sales * 0.12;
                } else if (sales > 10000){
                    commision = sales * 0.145;
                }
                break;
            default:
                isError = true;
                break;
        }
    }

    if(commision <= 0){
        console.log("error");
    } else {
        console.log(commision.toFixed(2));
    }
}

// tradeCommision(["Kaspichan",
// "-50"])
tradeCommision(["Plovdiv","-20"])
