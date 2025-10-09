const staircase = n => {
    const symbol = "#";

    for(let i=0; i < n; i++){
        console.log(" ".repeat(n-(i+1)) + symbol.repeat(i + 1))
    }

    return "Stdout results only...";
}


// HACKERRANK CHALLENGE - EASY
// Will print out a staircase to the right, with n amount of steps
console.log(staircase(5))