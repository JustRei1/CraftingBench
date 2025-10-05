function hasExoplanet(readings) {

    const alphabets = {};
    const listArray = [];
    const alphabetRegex = /[a-z]/i;
    let thereIsExoplanet = true;
    let sum = 0;

    for (let i = 0; i < 26; i++){
      alphabets[String.fromCharCode(97 + i)] = i + 10;  // Neat trick to give all alphabets values
    }

    for(const char of readings){
        sum += alphabetRegex.test(char) ? alphabets[char.toLowerCase()] : Number(char);
        listArray.push( alphabetRegex.test(char) ? alphabets[char.toLowerCase()] : Number(char));
    }

    const averageOfString = sum / listArray.length;

    for(let value of listArray){
        if(value <= (averageOfString * 0.8)){
            return thereIsExoplanet;
        }
    }

    return !thereIsExoplanet;
}   

// Rules in short. If atleast ONE reading is less than or equal to 80% of the average reading value. There is exoplanet
// freeCodeCamp daily challenge 10/5/2025

console.log(hasExoplanet("665544554"))                  // Expected value: False
console.log(hasExoplanet("FGFFCFFGG"))                  // Expected value: True
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"))     // Expected value: False                
console.log(hasExoplanet("FREECODECAMP"))               // Expected value: True    
console.log(hasExoplanet("9AB98AB9BC98A"))              // Expected value: False    
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"))   // Expected value: True                