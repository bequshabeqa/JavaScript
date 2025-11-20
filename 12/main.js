const usernameRegex = /^[A-Za-z][A-Za-z0-9]*[0-9]$/;
const emailRegex = /^[A-Za-z][A-Za-z0-9_.+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;
const addressRegex = /^[A-Za-zა-ჰ\s]+$/;
const postalRegex = /^[0-9]{4}$/;
const telRegex = /^\+[0-9]{7,15}$/;

function validateField(input, regex, errorMsg) {
    const value = input.value.trim();
    const res = document.getElementById("res");

    if (!regex.test(value)) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        res.innerHTML = `<p style="color:red">${errorMsg}</p>`;
        return false;
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        res.innerHTML = "";
        return true;
    }
}

function validateUsername() {
    const username = document.getElementById("username");
    validateField(username, usernameRegex, "მომხმარებლის სახელი არასწორია! პირველი ასო, ბოლო ციფრი <span>A---9<span>.");
}

function validateEmail() {
    const email = document.getElementById("email");
    validateField(email, emailRegex, "Email არასწორია! გთხოვთ შეამოწმოთ ფორმატი <span>beka@gmail.com<span>.");
}

function validatePassword() {
    const password = document.getElementById("password");
    validateField(password, passwordRegex, "Password არასწორია! <span>მინიმუმ 8 სიმბოლო, 1 ასო, 1 ციფრი, 1 სიმბოლო. მაგ: AaBb25!@ <span>.");
}

function validateAddress() {
    const address = document.getElementById("address");
    validateField(address, addressRegex, "მისამართი არასწორია! მხოლოდ ასოები დაშვებულია.");
}

function validatePostal() {
    const postal = document.getElementById("postal");
    validateField(postal, postalRegex, "ფოსტკოდი არასწორია! მხოლოდ 4 ციფრი.");
}

function validateTel() {
    const tel = document.getElementById("tel");
    validateField(tel, telRegex, "ტელეფონის ნომერი არასწორია! უნდა იწყებოდეს '+' და 7-15 ციფრი.");
}














// function registerUser() {
//     const username = document.getElementById("username");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const address = document.getElementById("address");
//     const postal = document.getElementById("postal"); 
//     const tel = document.getElementById("tel");
//     const res = document.getElementById("res");

//     const usernameRegex = /^[A-Za-z][A-Za-z0-9]*[0-9]$/;
//     const emailRegex = /^[A-Za-z][A-Za-z0-9_.+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;
//     const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;
//     const addressRegex = /^[A-Za-zა-ჰ]+$/;
//     const postalRegex = /^[0-9]{4}$/;
//     const telRegex = /^\+[0-9]{1,3}[0-9]{6,12}$/;

//     res.innerHTML = ""; // წინა შეცდომების გასუფთავება

//     function validate(input, regex, errorMsg) {
//         const value = input.value.trim();
//         if (!regex.test(value)) {
//             input.classList.add("invalid");
//             input.classList.remove("valid");
//             return errorMsg;
//         } else {
//             input.classList.remove("invalid");
//             input.classList.add("valid");
//             return null;
//         }
//     }

//     // ყველა ველის ვალიდაცია
//     const errors = [];

//     const userError = validate(username, usernameRegex, "მომხმარბელის სახელი არასწორია! გთხოვთ გაითვალისწინოთ პირველი უნდა იყოს ასო, ბოლო - ციფრი.");
//     if (userError) errors.push(userError);

//     const emailError = validate(email, emailRegex, "Email არასწორია! შეამოწმეთ ფორმატი.");
//     if (emailError) errors.push(emailError);

//     const passError = validate(password, passwordRegex, "Password არასწორია! უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, ერთ ასოს, ერთ ციფრს და ერთ სპეციალურ სიმბოლოს.");
//     if (passError) errors.push(passError);

//     const addressError = validate(address, addressRegex, "მისამართი არასწორია! მხოლოდ ასოები არიან დაშვებული.");
//     if (addressError) errors.push(addressError);

//     const postalError = validate(postal, postalRegex, "ფოსტკოდი არასწორია! უნდა შეიცავდეს მხოლოდ 4 ციფრს.");
//     if (postalError) errors.push(postalError);

//     const telError = validate(tel, telRegex, "ტელეფონის ნომერი არასწორია! უნდა დაიწყებოდეს '+' და შეიცავდეს 7-15 ციფრს.");
//     if (telError) errors.push(telError);

//     // ყველა შეცდომის გამოჩენა ერთდროულად
//     if (errors.length > 0) {
//         res.innerHTML = errors.map(err => `<p style="color:red">${err}</p>`).join("");
//     } else {
//         res.innerHTML = `<p style="color:green">Registration successful!</p>`;
//     }
// }








// function registerUser() {
//     let username = document.getElementById("username").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let address = document.getElementById("address").value;
//     let tel = document.getElementById("tel").value;
//     let res = document.getElementById("res");

//     let usernameRegex = /^[A-Za-z][A-Za-z0-9]*[0-9]$/;
//     let emailRegex = /^[A-z][A-z0-9_.+-]+@[A-z0-9.-]+\.[A-z]{2,5}$/;
//     let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;
//     let newPassRegex = /^[A-Z](?=.*[A-z])(?=.*\d)(?=.*[@!#$%?&*])[A-z\d]{8,}[A-z@!#$%?&*]{1,}$/;
//     let addressRegex = /^[A-Za-zა-ჰ]+$/;
//     let telRegex = /^\+[0-9]{1,3}[0-9]{6,12}$/;   

//     console.log(username.length)

//     if (!usernameRegex.test(username) && username.length > 0) {
//         res.innerHTML = 
//         `
//         <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Username is incorrect! </p>
//         `
//     } else if (!emailRegex.test(email) && email.length > 0) {
//         res.innerHTML = 
//         `
//         <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Email is incorrect! </p>
//         `
//     } else if (!passwordRegex.test(password) && password.length > 0) {
//         res.innerHTML = 
//         `
//         <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Password is incorrect! </p>
//         `
//     } else if (!telRegex.test(tel) && tel.length > 0) {
//         res.innerHTML = 
//         `
//         <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Password is incorrect! </p>
//         `
//     } else if (!addressRegex.test(address) && address.length > 0) {
//         res.innerHTML = 
//         `
//         <p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Password is incorrect! </p>
//         `
//     } else {
//         res.innerHTML = ''
//     }
// }