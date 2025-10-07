// freeCodeCamp Space Week Day 3 Challenge - 07/10/2025

const sendMessage = route => {
    const travelSpeed = 300000;                 // 300,000 km/s
    const delayInterval = 0.5;                  // in seconds
    let travelTime = 0;

    for(let i=0; i < route.length; i++){
        travelTime += route[i] / travelSpeed;
        if(i < route.length - 1) travelTime += delayInterval
    }

    return parseFloat(Math.round(travelTime * 10000) / 10000);          // Round to 4 decimal places and remove trailing zeros
}

// All time are in seconds
console.log(`Item #1: ${sendMessage([300000, 300000])} seconds`)
console.log(`Item #2: ${sendMessage([384400, 384400])} seconds`)
console.log(`Item #3: ${sendMessage([54600000, 54600000])} seconds`)
console.log(`Item #4: ${sendMessage([1000000, 500000000, 1000000])} seconds`)
console.log(`Item #5: ${sendMessage([10000, 21339, 50000, 31243, 10000])} seconds`)
console.log(`Item #6: ${sendMessage([802101, 725994, 112808, 3625770, 481239])} seconds`)