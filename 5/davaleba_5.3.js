// დავალება 5.3
// მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

// for
let namesF = ["John", "Nick", "Mary", "Bob", "Sue", "Ann" ]

for (let i = 0; i < namesF.length; i++) {
    if (namesF[i] === "Bob") {
        namesF.splice(i, 1);
    }
}

console.log(namesF);

// while
let namesW = ["John", "Nick", "Mary", "Bob", "Sue", "Ann" ]
let j = 0;

while(j < namesW.length) {
    if (namesW[j] === "Bob") {
        namesW.splice(j, 1);
    } else {
    j++;
    }
}

console.log(namesW);