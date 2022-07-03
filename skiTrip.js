function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];
    let totalSum = 0;
    let afterDiscount = 0;

    switch (roomType) {
        case "room for one person":
            totalSum = (days - 1) * 18;
            break;
        case "apartment":
            if (days < 10) {
                totalSum = (days - 1) * 25;
                afterDiscount = totalSum * 0.7;
            } else if (days <= 15) {
                totalSum = (days - 1) * 25;
                afterDiscount = totalSum * 0.65;
            } else if (days > 15) {
                totalSum = (days - 1) * 25;
                afterDiscount = totalSum * 0.5;
            }
            break;
        case "president apartment":
            if (days < 10) {
                totalSum = (days - 1) * 35;
                afterDiscount = totalSum * 0.9;
            } else if (days <= 15) {
                totalSum = (days - 1) * 35;
                afterDiscount = totalSum * 0.85;
            } else if (days > 15) {
                totalSum = (days - 1) * 35;
                afterDiscount = totalSum * 0.8;
            }
            break;
    }

    if (roomType == "room for one person" && rate == "positive") {
        totalSum = totalSum + (totalSum * 0.25);
        console.log(totalSum.toFixed(2));
        return;
    }

    if (rate == "positive") {
        afterDiscount = afterDiscount + (afterDiscount * 0.25);
        console.log(afterDiscount.toFixed(2));
    } else if (rate == "negative") {
        afterDiscount = afterDiscount - (afterDiscount * 0.1);
        console.log(afterDiscount.toFixed(2));
    }


}
