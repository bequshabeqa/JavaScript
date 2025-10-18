// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(testString) {
    if (testString === "") {
        return "this string is blank";
    } else {
        return "this string is not blank"
    }
}

console.log(blankStringChecker(""));
console.log(blankStringChecker("არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი"));