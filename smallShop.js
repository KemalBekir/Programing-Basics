function smallShop(input){
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);
    let totalCount = 0;

    if (product == "coffee"){
        if(town == "Sofia"){
            totalCount = count * 0.5;
        } else if (town == "Plovdiv"){
            totalCount = count * 0.4;
        } else if (town == "Varna"){
            totalCount = count * 0.45;
        }
    }

    if (product == "water"){
        if(town == "Sofia"){
            totalCount = count * 0.8;
        } else if (town == "Plovdiv" || town == "Varna"){
            totalCount = count * 0.7;
        }
    }

    if (product == "beer"){
        if(town == "Sofia"){
            totalCount = count * 1.2;
        } else if (town == "Plovdiv"){
            totalCount = count * 1.15;
        } else if (town == "Varna"){
            totalCount = count * 1.1;
        }
    }

    if (product == "sweets"){
        if(town == "Sofia"){
            totalCount = count * 1.45;
        } else if (town == "Plovdiv"){
            totalCount = count * 1.3;
        } else if (town == "Varna"){
            totalCount = count * 1.35;
        }
    }

    if (product == "peanuts"){
        if(town == "Sofia"){
            totalCount = count * 1.6;
        } else if (town == "Plovdiv"){
            totalCount = count * 1.5;
        } else if (town == "Varna"){
            totalCount = count * 1.55;
        }
    }

    console.log(totalCount);
}