const checkStrength = password => {
    let strengthLevel = 0;
    const upperLowerCaseRegex = /(?=.*[A-Z])(?=.*[a-z])/;
    const numberRegex = /\d/;
    const specialCharacterRegex = /\W/;

    if(password.length >= 8) strengthLevel++
    if(upperLowerCaseRegex.test(password)) strengthLevel++
    if(numberRegex.test(password)) strengthLevel++
    if(specialCharacterRegex.test(password)) strengthLevel++

    return strengthLevel < 2 ? "weak" : strengthLevel < 4 ? "medium" : "strong";
}

console.log(`Item # 1 Password Strength: ${checkStrength("123456")}`)
console.log(`Item # 2 Password Strength: ${checkStrength("pass!!!")}`)
console.log(`Item # 3 Password Strength: ${checkStrength("Qwerty")}`)
console.log(`Item # 4 Password Strength: ${checkStrength("PASSWORD")}`)
console.log(`Item # 5 Password Strength: ${checkStrength("PASSWORD!")}`)
console.log(`Item # 6 Password Strength: ${checkStrength("PassWord%^!")}`)
console.log(`Item # 7 Password Strength: ${checkStrength("qwerty12345")}`)
console.log(`Item # 8 Password Strength: ${checkStrength("PASSWORD!")}`)
console.log(`Item # 9 Password Strength: ${checkStrength("PASSWORD!")}`)
console.log(`Item # 10 Password Strength: ${checkStrength("S3cur3P@ssw0rd")}`)
console.log(`Item # 11 Password Strength: ${checkStrength("C0d3&Fun!")}`)