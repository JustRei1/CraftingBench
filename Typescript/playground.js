// Start of a new era for TypeScript
function helloWorld(name) {
    return "Hello, ".concat(name);
}
function add(firstNumber, secondNumber) {
    var sum = firstNumber + secondNumber;
    var result = "The sum is ".concat(sum);
    return result;
}
function displayPerson(p) {
    console.log("Personal Details: \n\n        Name: ".concat(p.name, "\n\n        Age: ").concat(p.age, "\n\n        Gender: ").concat(p.gender, "\n\n        Favorite Snack: ").concat(p.favoriteSnack, "\n        \n        Verified! Welcome ").concat(p.name));
}
var Student = /** @class */ (function () {
    function Student(name, age, gender, favoriteSnack) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.favoriteSnack = favoriteSnack;
    }
    return Student;
}());
var message = add(2, 5);
// console.log(message)
// Example of type Person with Interface
var person = {
    name: "Gabriel Reigh Liwanag",
    age: 23,
    gender: "M",
    favoriteSnack: "Pizza"
};
displayPerson(person);
