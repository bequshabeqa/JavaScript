// დავალება 5.8
//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

// for
function blankStringCheckerF(testString) {
    let isBlanck = true;

    for (i = 0; i < testString.length; i++) {
        if (testString[i] !== " ") {
            isBlanck = false;
            break;
        }
    }
    if (isBlanck) {
        return "this string is blank";
    } else {
        return "this string is not blank";
    }
}

console.log(blankStringCheckerF(""));
console.log(blankStringCheckerF("   "));
console.log(blankStringCheckerF("ეს არ არის ცარიელი"));

// while
function blankStringCheckerW(testString) {
    let isBlanck = true;
    let j = 0;

    while (j < testString.length) {
        if (testString[j] !== " ") {
            isBlanck = false;
            break;
        }
        j++;
    }
    if (isBlanck) {
        return "this string is blank";
    } else {
        return "this string is not blank";
    }
}

console.log(blankStringCheckerW(" "));
console.log(blankStringCheckerW("   "));
console.log(blankStringCheckerW("es ar aris carieli"));