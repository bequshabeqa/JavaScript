/* შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.
*/

 const passwordCheck = function(password) {

    if (password.length < 3) {
        return "This password is unsuitable"
    } else if (password.length >= 3 && password.length <= 6) {
        return "This password is too week"
    } else if (password.length >= 6 && password.length <= 8) {
        return "This password is good"
    } else if (password.length >= 8 && password.length <= 16) {
        return "This password is strong"
    } else {
        return "This password is long";
    }
}

console.log(passwordCheck("12"));
console.log(passwordCheck("beqa"));
console.log(passwordCheck("beqa123"));
console.log(passwordCheck("beqa123456"));
console.log(passwordCheck("beqa123456beqa123456"));