function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October":
            studio = nights * 50;
            if(nights > 14){
                studio = (nights * 50) * 0.7;
                apartment = (nights * 65) * 0.9
            } else if (nights > 7 && nights <= 14) {
                studio = (nights * 50) * 0.95;
            } 
            apartment = nights * 65;
            if(nights > 14){
                apartment = apartment * 0.9;
            }                           
            break;
        case "June":
        case "September":
            studio = nights * 75.20;
            apartment = nights * 68.70;
            if (nights > 14) {
                studio = (nights * 75.20) * 0.8;
                apartment = (nights * 68.7) * 0.9;
            }
            break;
        case "July":
        case "August":
            studio = nights * 76;
            apartment = nights * 77;
            if (nights > 14) {
                apartment = (nights * 77) * 0.9;
            }
            break;
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom(["May",
    "15"])
hotelRoom(["June",
    "14"])
hotelRoom(["August",
    "20"])
