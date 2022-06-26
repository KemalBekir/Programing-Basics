function worldRecord(input){
    let worldRec = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecForDist = Number(input[2]);
    
    let dragTime = Math.floor((distance / 15));
    let timeAfterDrag =  dragTime * 12.5;
    let totalTime = ((distance * timeInSecForDist) + timeAfterDrag);

    if(worldRec <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - worldRec).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }
}
 
worldRecord(["55555.67",
"3017",
"5.03"])