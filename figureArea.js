function area(input){
    let figure = input[0];
    if (figure == "square"){
        let a = Number(input[1]);
        console.log(Math.pow(a , 2).toFixed(3));
    } else if (figure == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a * b).toFixed(3));
    } else if (figure == "circle"){
        let r = Number(input[1]);
        console.log((Math.PI * (r * r)).toFixed(3));
    } else if (figure == "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);

        console.log(((a * b) / 2).toFixed(3));
    }
}

area(["triangle",
"4.5",
"20"]);