// freeCodeCamp Space Week Day 6 Challenge - Lunar MoonPhases
const moonPhase = date => {
    const refDate = new Date("2000-01-06")
    const curDate = new Date(date)
    const daysPassed = (curDate - refDate) / (1000 * 60 * 60 * 24)
    let phase = ""
    let j = 1

    for(let i = 0; i <= daysPassed; i++){
        phase = j <= 7 ? "New" : j <= 14 ? "Waxing" : j <= 21 ? "Full" : j <= 28 ? "Waning" : "New"
        j = j !== 28 ? j + 1 : 1
    }

    return phase;
}

console.log(moonPhase("2000-01-12"))
console.log(moonPhase("2000-01-13"))
console.log(moonPhase("2014-10-15"))
console.log(moonPhase("2012-10-21"))
console.log(moonPhase("2022-12-14"))