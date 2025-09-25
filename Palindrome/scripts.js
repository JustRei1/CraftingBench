const textBox = document.getElementById('text-input');
const checkerButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

checkerButton.addEventListener("click", () => {
    if(textBox.value === ""){
        alert("Please input a value");
    }else{
        const palindromizedWord = palindromizer(textBox.value);
        const cleanUserInput = cleanText(textBox.value)
        resultText.innerText = cleanUserInput === palindromizedWord ? `${textBox.value} is a palindrome` : `${textBox.value} is not a palindrome`;
    }
});

const palindromizer = word => {
    const cleanWord = cleanText(word);
    const word_array = [];
    
    for(const char of cleanWord){
        word_array.unshift(char);
    }
    return word_array.join("");
}

const cleanText = word => {
    const regex = /[_+-\W]/g;
    return word.replace(regex, "").toLowerCase();
}
