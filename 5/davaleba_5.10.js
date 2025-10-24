// დავალება 5.10
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

let eMail = "beqa.beqauri@gmail.com";

let hideLetters = eMail.slice(4, 12)
console.log(eMail.replace(hideLetters, "*".repeat(hideLetters.length)))