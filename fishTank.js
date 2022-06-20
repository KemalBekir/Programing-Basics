function fishTank(input){
    let lenghtInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percentage = Number(input[3]) * 0.01;

    let totalVolume = lenghtInCm * widthInCm * heightInCm;
    let totalLitres = totalVolume * 0.001;
    let totalNeededLitres = totalLitres * (1 - percentage);
    console.log(totalNeededLitres);
}

fishTank(["105","77","89","18.5"])