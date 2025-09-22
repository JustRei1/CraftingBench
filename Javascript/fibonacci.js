// Non recursive
function fiboFun(int){
    let fibArray = [];

    for( let i = 0; i <= int; i++){

        if(i === 0){ 
            fibArray.push(i);
        }else if(i === 1){
            fibArray.push(i);
        }else{
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
    }

    return fibArray;
}

// Recursive Function style fiboFunction
function recursiveFibo(int){
    if(int === 0){
        return 0;
    }else if(int === 1){
        return 1;
    }else{
        return recursiveFibo(int-1) + recursiveFibo(int-2);
    }
}

// Returns an array of fib sequence
console.log(fiboFun(2));                            // Expected Value: [0, 1, 1]
console.log(fiboFun(5));                            // Expected Value: [0, 1, 1, 2, 3, 5]

// Only returns the nth value of fib sequence
console.log(recursiveFibo(0));                      // Expected Value 0
console.log(recursiveFibo(1));                      // Expected Value 1
console.log(recursiveFibo(2));                      // Expected Value 1
console.log(recursiveFibo(3));                      // Expected Value 2
console.log(recursiveFibo(4));                      // Expected Value 3
console.log(recursiveFibo(5));                      // Expected Value 5
