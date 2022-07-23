function catLife(input) {
    let breed = input[0];
    let sex = input[1];
    let age = 0;

    switch (breed) {
        case "British Shorthair":
            switch (sex) {
                case "m":
                    age = Math.floor((13 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((14 * 12) / 6);
                    break;
            }
            break;
        case "Siamese":
            switch (sex) {
                case "m":
                    age = Math.floor((15 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((16 * 12) / 6);
                    break;
            }
            break; case "Persian":
            switch (sex) {
                case "m":
                    age = Math.floor((14 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((15 * 12) / 6);
                    break;
            }
            break; case "Ragdoll":
            switch (sex) {
                case "m":
                    age = Math.floor((16 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((17 * 12) / 6);
                    break;
            }
            break; case "American Shorthair":
            switch (sex) {
                case "m":
                    age = Math.floor((12 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((13 * 12) / 6);
                    break;
            }
            break; case "Siberian":
            switch (sex) {
                case "m":
                    age = Math.floor((11 * 12) / 6);
                    break;
                case "f":
                    age = Math.floor((12 * 12) / 6);
                    break;
            }
            break;
            default :
                console.log(`${breed} is invalid cat!`);
                break;
    }
    if(age > 0){
        console.log(`${age} cat months`);
    }
    
}

catLife(["Persian",
    "m"])
catLife(["Siamese",
    "f"])
catLife(["Siberian",
    "m"])