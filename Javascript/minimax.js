const miniMax = arr => {
    const min = arr.filter(v => v !== Math.max(...arr)).reduce((acc, v) => v + acc)
    const max = arr.filter(v => v !== Math.min(...arr)).reduce((acc, v) => v + acc)
    console.log(min, max);

    return "Stdout results only..."
}


const miniMaxRevised = arr => {
    let filteredOnce = false;

    const min = arr.filter(v => {
        if(v !== Math.max(...arr) || filteredOnce){
            return v
        }else{
            filteredOnce = true;
            return v !== Math.max(...arr)
        }
    }).reduce((acc, v) => v + acc)

    filteredOnce = false;

    const max = arr.filter(v => {
        if(v !== Math.min(...arr) || filteredOnce){
            return v
        }else{
            filteredOnce = true;
            return v !== Math.min(...arr)
        }
    }).reduce((acc, v) => v + acc)

    console.log(min, max)

    return "Stdout results only..."
}

// HACKERRANK CHALLENGE - EASY
// Only takes up to 5 integers
console.log("Sample #1 - Basic Minimax", miniMax([1, 2, 3, 4, 5]))

// IF you use miniMax() here...
// It will cause a bug, using filter() will remove all the values
// since technically all values satisfy Math.max()
// To fix this... check miniMaxRevised()
console.log("Sample #2", miniMaxRevised([5, 5, 5, 5, 5]))

console.log("Sample #3 - Minimax Revised", miniMaxRevised([1, 2, 3, 4, 5]))
