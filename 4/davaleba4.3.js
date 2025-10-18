/* შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120 */

function factorialCalculator(number) {
    let result = 1;

    for (let count = 1; count <= number; count++) {
        result *= count;
    } 

     return result;
}

let number = Number(prompt("შეიყვანე სასურველი რიცხვი: "));
console.log(factorialCalculator(number));

// let result;

// alert("შედეგი: " + result);