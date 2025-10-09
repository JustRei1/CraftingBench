const plusMinus = arr => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for(let i=0; i < arr.length ; i++){
        if(arr[i] < 0){
            negativeCount++
        }else if(arr[i] === 0){
            zeroCount++
        }else{
            positiveCount++
        }
    }
    
    if(positiveCount !== 0) positiveCount /= arr.length
    if(negativeCount !== 0) negativeCount /= arr.length
    if(zeroCount !== 0) zeroCount /= arr.length

    console.log(positiveCount.toFixed(6));
    console.log(negativeCount.toFixed(6));
    console.log(zeroCount.toFixed(6));
    
    return "Stdout results only..."
}


// HACKERRANK CHALLENGE - EASY
// Will print out the ratio of positive, negative, and zeros in 6 decimal places
console.log("Sample #1", plusMinus([0, 1, 1, -2, 5]))