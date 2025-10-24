// დავალება 5.6
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

// for
function factorialCalculatorF(number) {
    let result = 1;

    for (let count = 1; count <= number; count++) {
        result *= count;
    } 

     return result;
}

let number = 5;
// let number = Number(prompt("შეიყვანე სასურველი რიცხვი: "));
console.log(factorialCalculatorF(number));

// while
function factorialCalculatorW(number) {
    let result = 1;
    let count = 1;

    while(count <= number) {
        result *= count;
        count++;
    }
    return result;
}

console.log(factorialCalculatorW(number));