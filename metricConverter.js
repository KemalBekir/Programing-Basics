function metricConverter(input){
    let num = Number(input[0]);
    let second = input[1];
    let third = input[2];

    let conversion = `${second} + ${third}`;

    if(conversion == 'mm + m'){
        let result = num / 1000;
        console.log(result.toFixed(3));
    } else if(conversion == 'mm + cm'){
        let result = num / 10;
        console.log(result.toFixed(3));
    } else if (conversion == 'cm + m'){
        let result = num / 100;
        console.log(result.toFixed(3));
    } else if (conversion == 'cm + mm'){
        let result = num * 10;
        console.log(result.toFixed(3));
    } else if (conversion == 'm + mm'){
        let result = num * 1000;
        console.log(result.toFixed(3));
    } else if (conversion == 'm + cm'){
        let result = num * 100;
        console.log(result.toFixed(3));
    }
        
}
