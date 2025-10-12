// freeCodeCamp Space Week Day 7 Challenge - Fuel Launch
const launchFuel = payload => {
    let fuelPerPayload = payload / 5  // In kg
    let totalWeight = 0;
    let additionalFuel = fuelPerPayload;

    while(additionalFuel >= 1){
        totalWeight = fuelPerPayload + payload
        additionalFuel = (totalWeight / 5) - fuelPerPayload
        fuelPerPayload += additionalFuel
    }
    
    return Math.round(fuelPerPayload * 10) / 10;
}

console.log(launchFuel(50))
console.log(launchFuel(500))
console.log(launchFuel(243))
console.log(launchFuel(11000))
console.log(launchFuel(6214))