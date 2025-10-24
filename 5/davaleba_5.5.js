// დავალება 5.5
// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ. 
// 1
//  2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.


// for
function fizzBuzzF() {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i, "FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i, "Fizz");
        } else if (i % 5 === 0) {
            console.log(i, "Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzF();

// while
function fizzBuzzW() {
    let j = 1;

    while(j <= 100) {
        if (j % 3 === 0 && j % 5 === 0) {
            console.log(j, "FizzBuzz");
        } else if (j % 3 === 0) {
            console.log(j, "Fizz");
        } else if (j % 5 === 0) {
            console.log(j, "Buzz");
        } else {
            console.log(j);
        }
        j++;
    }
}

 fizzBuzzW();