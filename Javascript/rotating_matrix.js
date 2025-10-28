const rotateMatrix = (matrix, loop=1) => {
    if(loop > 4 || loop === 0 || loop < 0){
        return loop < 0 
        ? `Seriously...` 
        : loop === 0 
        ? `I won't allow you to not rotate...`
        :`You can only rotate 4 times`
    }
    console.log(`Rotate Matrix ${loop} times.`)
    let resultMatrix = matrix
    for(let k=0; k < loop; k++){
        const rotatedMatrix = []
        for(let i=0; i < resultMatrix.length; i++){
            rotatedMatrix[i] = []
            for(let j=0; j < resultMatrix[i].length; j++){
                rotatedMatrix[i][j] = resultMatrix[j][i]
            }
            rotatedMatrix[i].reverse()
        }
        resultMatrix = rotatedMatrix
    }

    return resultMatrix.map(row => `[${row.join(',')}]`).join('\n')
}

// The concept of Rotating a 2D Square Matrix clockwise by 90 deg
//
//  Example:
//
//          [1, 2]      2D Matrix
//          [3, 4]
//
//          [1, 3]      Convert rows to column
//          [2, 4]
//
//          [3, 1]      Reverse each array
//          [4, 2]
//
//          Successfully Rotated 2D Square Matrix by 90 degrees clockwise

const sampleMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log('Before:\n')
console.log(sampleMatrix.map(row => `[${row.join(',')}]`).join('\n'))
console.log('\nAfter:\n')
console.log(rotateMatrix(sampleMatrix, -1))