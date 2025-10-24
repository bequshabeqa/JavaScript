// დავალება 5.1 
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// for
let everyThirdF = ["Beqa", "Nika", "Gaga", "Beqa", "Nino", "Kato", "Mari", "Gio", "Luka", "Tekla" ]

for (let i = 2; i < everyThirdF.length; i += 3) {
    console.log(everyThirdF[i]);
}

// while
let everyThirdW = ["Beqa", "Mari", "Gio", "Nika", "Gaga", "Beqa", "Nino", "Kato", "Luka", "Tekla" ]
let j = 2;

while ( j < everyThirdW.length) {
    console.log(everyThirdW[j]);
    j += 3;
}