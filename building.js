function building(input){
    let level = Number(input[0]);
    let apartments = Number(input[1]);
   
    for(let i = level; i > 0; i--){
        let floor = "";
        for(let j = 0; j < apartments; j++){
            if(i == level){
                floor += `L${i}${j} `;
            } else {
                if(i % 2 == 0){
                    floor += `O${i}${j} `;
                } else {
                    floor += `A${i}${j} `;
                }
            }
        }
        console.log(floor);
    }
    
}

// building(["6", "4"])
// building(["9", "5"])
// building(["4", "4"])