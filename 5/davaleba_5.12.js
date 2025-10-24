// დავალება 5.12
// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით
let num1 = 7;
let num2 = 15;

let calculator = {
    num1: 10,
    num2: 5,


    calculate: function (operation) {
        if (operation === "+") {
            // return this.num1 + this.num2;
            return num1 + num2;
        } else if (operation === "-") {
            return this.num1 - this.num2;
            // return num1 - num2;
        } else if (operation === "*") {
            return this.num1 * this.num2;
            // return num1 * num2;
        } else if (operation === "/") {
            return this.num1 / this.num2;
            // return num1 / num2;
        } else {
            return "msgvavsi moqmedeba ar arsebobs";
        }
    }
};

console.log(calculator.calculate("+"));
console.log(calculator.calculate("-"));
console.log(calculator.calculate("*"));
console.log(calculator.calculate("/"));
console.log(calculator.calculate("%"));