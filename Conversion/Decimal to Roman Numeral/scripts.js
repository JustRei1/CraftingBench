const numberInput = document.getElementById('number');
const submitButton = document.getElementById('convert-btn');
const result = document.getElementById('output');
const romanNumerals = [
    {
        symbol: "M",
        value: 1000
    },
    {
        symbol: "CM",
        value: 900
    },
    {
        symbol: "D",
        value: 500
    },
    {
        symbol: "CD",
        value: 400
    },
    {
        symbol: "C",
        value: 100
    },
    {
        symbol: "XC",
        value: 90
    },
    {
        symbol: "L",
        value: 50
    },
    {
        symbol: "XL",
        value: 40
    },
    {
        symbol: "X",
        value: 10
    },
    {
        symbol: "IX",
        value: 9
    },
    {
        symbol: "V",
        value: 5
    },
    {
        symbol: "IV",
        value: 4
    },
    {
        symbol: "I",
        value: 1
    },
]

const checkInput = () => {
    const numberInt = parseInt(numberInput.value);

    if(numberInput.value === ""){
        result.textContent = "Please enter a valid number";
        return;
    }else if(numberInt < 1){
        result.textContent = "Please enter a number greater than or equal to 1";
        return;
    }else if(numberInt >= 4000){
        result.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    result.textContent = convertToRomanNumeral(numberInt);
    numberInput.value = "";
}

const convertToRomanNumeral = number => {

    let symbol = '';

    for(const obj of romanNumerals){
        if(number >= obj.value){
            symbol = obj.symbol;
            number -= obj.value;
            break;
        }
    }
    
    if(number !== 0){
        return symbol + convertToRomanNumeral(number);
    }else{
        return symbol;
    }
}

submitButton.addEventListener('click', checkInput);

numberInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        checkInput();
    }
});