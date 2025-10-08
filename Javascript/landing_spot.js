const findLandingSpot = matrix => {

    const zerosArray = []

    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){

                let curVal = 0;

                if(matrix[i-1]?.[j] !== undefined) curVal += matrix[i-1]?.[j]
                if(matrix[i+1]?.[j] !== undefined) curVal += matrix[i+1]?.[j]
                if(matrix[i]?.[j+1] !== undefined) curVal += matrix[i]?.[j+1]
                if(matrix[i]?.[j-1] !== undefined) curVal += matrix[i]?.[j-1]

                zerosArray.push(
                    {
                        index: [i, j],
                        val: curVal
                    }
                )
            }
        }
    }

    const lowestValueIndex = zerosArray.reduce((acc, cur) => cur.val < acc.val ? cur : acc, zerosArray[0])

    return lowestValueIndex.index;
}

console.log(`Array #1: `, findLandingSpot([[1, 0], [2, 0]]))
console.log(`Array #2: `, findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]))
console.log(`Array #3: `, findLandingSpot([[0, 0], [2, 0]]))