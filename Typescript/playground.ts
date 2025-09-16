// Start of a new era for TypeScript

function helloWorld(name: string): string{
    return `Hello, ${name}`;
}

function add(firstNumber: number, secondNumber: number): string{
    
    let sum = firstNumber + secondNumber;
    let result = `The sum is ${sum}`

    return result;
}

interface Person{
    name: string,
    age: number,
    gender: string,
    favoriteSnack: string,
}

function displayPerson(p: Person) {
    console.log(
        `Personal Details: \n
        Name: ${p.name}\n
        Age: ${p.age}\n
        Gender: ${p.gender}\n
        Favorite Snack: ${p.favoriteSnack}
        
        Verified! Welcome ${p.name}`
    );
}

class Student{
    name: string;
    age: number;
    gender: string;
    favoriteSnack: string;

    constructor(name: string, age: number, gender: string, favoriteSnack: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.favoriteSnack = favoriteSnack;
    }
}

const message = add(2, 5)
// console.log(message)

// Example of type Person with Interface
const person = {
    name: "Gabriel Reigh Liwanag",
    age: 23,
    gender: "M",
    favoriteSnack: "Pizza"
}

displayPerson(person);