// დავალება 5.7
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.


// for
function firstLetterCapitalizerF(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }

  return result;
}

let name = "javascript";
console.log(firstLetterCapitalizerF(name));

// while
function firstLetterCapitalizerW(word) {
    let result = "";
    let j = 0;

    while (j < word.length) {
        if (j === 0) {
            result += word[j].toUpperCase();
        } else {
            result += word[j];
        }
        j++;
    }
    return result;
}

console.log(firstLetterCapitalizerW(name));