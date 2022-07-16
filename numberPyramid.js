function numberPyramid(input){
    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentline =" ";

    for(let rows = 0; rows <= n; rows++){
        for(let cols = 0; cols <= rows; cols++){
            if(current > n){
                isBigger = true;
                break;
            }
            printCurrentline += current + " ";
            current++;
        }
        console.log(printCurrentline);
        printCurrentline = "";
        if(isBigger){
            break;
        }
    }
}

numberPyramid(["7"])
numberPyramid(["12"])
numberPyramid(["15"])