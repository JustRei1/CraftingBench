const hexCharacters = 'ABCDEF1234567890';

function generateRandomColor() {
    let hexArray = [];
    let randomHexCode = '';
    let index = '';

    // Convert string to array
    for(const char of hexCharacters){
        hexArray.push(char);
    }

    for(let i = 1; i < 7; i++){
        index = Math.floor(Math.random() * hexArray.length);

        // A chance to repeat a chosen index twice and skips to next iteration
        if(Math.floor(Math.random() * 100) < 5 && i % 2 == 1){
            randomHexCode += hexArray[index].repeat(2);
            i++
            continue;
        }
        randomHexCode += hexArray[index];
    }

    return `#${randomHexCode}`;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
    const color = generateRandomColor();

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor;