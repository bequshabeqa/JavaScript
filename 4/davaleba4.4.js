// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

let name = "javascript";

function firstLetterCapitalizer (name) {
   return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(firstLetterCapitalizer(name));