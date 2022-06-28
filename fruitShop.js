function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let totalCount = 0;

    if(day == "Saturday" || day == "Sunday"){
        switch(fruit){
            case "banana":
                totalCount = count * 2.7;
                break;
            case "apple":
                totalCount = count * 1.25;
                break;
            case "orange":
                totalCount = count * 0.90;
                break;
            case "grapefruit":
                totalCount = count * 1.6;
                break;
            case "kiwi":
                totalCount = count * 3;
                break;
            case "pineapple":
                totalCount = count * 5.6;
                break;
            case "grapes":
                totalCount = count * 4.2;
                break;
            default:
                console.log("error");
                return;
        }
    } 


    if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day ==  "Friday"){
        switch(fruit){
            case "banana":
                totalCount = count * 2.5;
                break;
            case "apple":
                totalCount = count * 1.2;
                break;
            case "orange":
                totalCount = count * 0.85;
                break;
            case "grapefruit":
                totalCount = count * 1.45;
                break;
            case "kiwi":
                totalCount = count * 2.7;
                break;
            case "pineapple":
                totalCount = count * 5.5;
                break;
            case "grapes":
                totalCount = count * 3.85;
                break;
            default:
                console.log("error");
                return;
        }
        
    }
    
   if(totalCount != 0){
    console.log(totalCount.toFixed(2)); 
   } else {
       console.log("error");
   }
    

      
}


