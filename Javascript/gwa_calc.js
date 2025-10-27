const gwaCalc = (stuGrades, subUnits) => {
    let subPoint = 0;
    let overallUnits = subUnits.reduce((acc, v) => acc + v);
    for(let i=0; i < stuGrades.length; i++){
        subPoint += stuGrades[i] * subUnits[i]
    }
    return Math.round((subPoint / overallUnits) * 100) / 100
}

grades = [
    4, 3.5, 3.5, 4, 4, 4, 3.5,
    4, 4, 4, 4, 3.5, 3.5, 3,
    4, 4, 4, 4, 4, 4, 4, 3.5,
    4, 3.5, 4, 4, 4, 3, 4, 3.5,
    4, 4, 3.5, 4, 4, 3,
    3.5, 4, 4, 3, 3.5,
    4, 4, 4, 3.5, 2,
    4, 2.5, 4, 3.5, 3,
    2.5, 3, 4, 4, 2.5,
    3.5, 4, 3, 3, 4,
    4,
    4
]

units = [
    3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 2, 3, 3, 3,
    3, 3, 3, 3, 2, 3, 3, 3,
    3, 3, 3, 3, 2, 3, 3, 3,
    3, 3, 3, 3, 2, 3,
    3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
    9,
    9
]

console.log(`Total GWA ${gwaCalc(grades, units)}`)