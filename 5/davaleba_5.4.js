// დავალება 5.4
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// for
function fun(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

console.log(fun(5, 3));

// while
function fun(number, power) {
    let result = 1;
    let j = 0;

    while (j < power) {
        result *= number;
        j++
    }
    return result;
}

console.log(fun(5, 3));