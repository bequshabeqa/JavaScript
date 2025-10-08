let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let  posicion = ["st","nd","rd", "th"];

// დავალება 1
const hasBlue = color.includes("Blue");
console.log(hasBlue);

// დავალება 2
console.log(color[0]);

// დავალება 3
const arrLength = color.length; // მასივის სიგრძის (ელემენტების რაოდენობის) გამოტანა (length თვლას იწყებს 1 დან)
console.log(`Length of array is ${arrLength}`);

console.log(color[arrLength-1]);

// დავალება 4
console.log(1 + posicion[0] + " choise is " + color[0] + " " + 2 + posicion[1] + " choise is " + color[1] + " " + 3 + posicion[2] + " choise is " + color[2] + " " + 4 + posicion[3] + " choise is " + color[3] + " " + 5 + posicion[3] + " choise is " + color[4] + " " + 6 + posicion[3] + " choise is " + color[5] + " " + 7 + posicion[3] + " choise is " + color[6]);

// დავალება 5
student = {
    firstName: "Beka",
    lastName: "Tchitadze",
    age: 32,
    hairColor: "black",
}

console.log(student);

student.address = "Tbilisi";

delete student.hairColor;

student.age = 33;

console.log(student);