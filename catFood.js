function catFood(input){
    let numCats = Number(input[0]);
    let smallCat = 0;
    let bigCat = 0;
    let giantCat = 0;

    let totalFood = 0;

    for(let i = 1; i <= input.length; i++){
        let tempFood = Number(input[i]);

        if(tempFood >= 100 && tempFood < 200){
            smallCat++;
            totalFood += tempFood;
        } else if (tempFood >= 200 && tempFood < 300){
            bigCat++;
            totalFood += tempFood;
        } else if (tempFood >= 300 && tempFood < 400){
            giantCat++;
            totalFood += tempFood;
        }
    }

    let totalPerDay = totalFood / 1000;
    console.log(`Group 1: ${smallCat} cats.`);
    console.log(`Group 2: ${bigCat} cats.`);
    console.log(`Group 3: ${giantCat} cats.`);
    console.log(`Price for food per day: ${(totalPerDay * 12.45).toFixed(2)} lv.`);

}

catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])
catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])