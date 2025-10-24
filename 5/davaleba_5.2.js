// დავალება 5.2
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// for
let countF = "";

for (let i = 10; i >= 1; i--) {
    countF += i;
    if(i > 1) countF += ",";
}

console.log(countF);

// while
let countW = "";
let j = 10;

while( j >= 1) {
    countW += j;
    if (j > 1) countW += ",";
    j--;
}

console.log(countW);