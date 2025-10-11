// დავალება 1
let ricxvi = prompt("შეიყვანე რიცხვი:");
ricxvi = Number(ricxvi);
let kvadrati = ricxvi * ricxvi;

alert("შენი რიცხვის კვადრატია: " + kvadrati);

// დავალება 2
let celsiuce = prompt("შეიყვანე რიცხვი:" + " " + "°C");
celsiuce = Number(celsiuce); // °C ეს სიმბოლოები ვერ დავამატე
let farengate = (celsiuce * 9/5) + 32;

alert("შენი რიცხვი ფარენგეიტში არის: " + farengate + " " + "°F");

// დავალება 3
function isAvailable() {
    let firstDiapazone = prompt("შეიყვანე დიაპაზონის საწყისი რიცხვი: ");
    let lastDiapazone = prompt("შეიყვანე დიაპაზონის ბოლო რიცხვი: ");
    let number = prompt("შეიყვანე სასურველი რიცხვი: ");

    if (number >= firstDiapazone && number <= lastDiapazone) {
        alert("შენს მიერ არჩეული რიცხვი" + "`" + number + "`" + "არის მოცემულ დიაპაზონში: " + "`" + firstDiapazone + "-" + lastDiapazone + "`");
    } else {
        alert("შენს მიერ არჩეული რიცხვი" + "`" + number + "`" + "არ არის მოცემულ დიაპაზონში: " + "`" + firstDiapazone + "-" + lastDiapazone + "`");
    }
}

console.log(isAvailable());

// დავალება 4
function isYesOrNo() {
    let year = prompt("შეიყვანე სასურველი წელი:");

    // მხოლოდ ორ ტოლობაზე მუშაობს და ავტომატურად როგორ მიხვდეს რომელი წელია ნაკიანი რომელი არა???
    if (year == 2020) {
        alert("შენს მიერ შეყვანილი წელი ნაკიანია")
    } else {
        alert("შენს მიერ შეყვანილი წელი არ არის ნაკიანი")
    }
}

console.log(isYesOrNo());


// დავალება 5
function calculator() {
    let ricxvi1 = prompt("შეიყვანე რიცხვი 1: ");
    let ricxvi2 = prompt("შეიყვანე რიცხვი 2: ");
    let mokmedeba = prompt("შეიყვანე მოქმედება: ");

    let shedegi;

    if (mokmedeba === "+") {
        shedegi = ricxvi1 + ricxvi2;
    } else if (mokmedeba === "-") {
        shedegi = ricxvi1 - ricxvi2;
    } else if (mokmedeba === "*") {
        shedegi = ricxvi1 * ricxvi2;
    } else if (mokmedeba === "/") {
        if (ricxvi2 !== 0) {
            shedegi = ricxvi1 / ricxvi2;
        } else {
            shedegi = "0-ზე გაყოფა არ შეიძლება!";
        }
    } else {
        shedegi = "არასწორი მოქმედება! გთხოვთ შეიყვანოთ +, -, * ან /";
    }

    alert("შედეგი: " + shedegi);
}

calculator();

// მხოლოდ მიმატება არ კეთდება სწორად ???  შეყვანილ რიცხვებს გვერდიგვერდ წერს