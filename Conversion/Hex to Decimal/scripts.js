const userInput = document.getElementById('hex')
const convertButton = document.getElementById('convert-btn')
const result = document.getElementById('output')

const convertToHex = (v, len) => {
    const hexCode = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
    }

    return len < 0
    ? ""
    : isNaN(v[len])
        ? Number(convertToHex(v, len - 1)) + (hexCode[v[len]] * (16 ** len))
        : Number(convertToHex(v, len - 1)) + (v[len] * (16 ** len))
}

const checkValue = hexInput => {
    const hexRegex = /^[0-9A-F]+$/;
    return !hexInput
    ? "Please enter a value!"
    : !hexRegex.test(hexInput)
        ? "This is not a valid Hex Code!"
        : convertToHex(hexInput.split("").reverse(), hexInput.length - 1)
}

convertButton.addEventListener("click", () => {
    result.textContent = checkValue(userInput.value)
})

userInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        result.textContent = checkValue(userInput.value)
    }
})