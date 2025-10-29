function colorChange(red) {
    const Red = document.getElementById("Red");
    const colorBtn = document.getElementById(`colorChanger`);
    document.body.style.backgroundColor = Red;
    Red.innerText = `Background Color: ${Red}`;
}

function colorChange(blue) {
    const Blue = document.getElementById("Blue");
    document.body.style.backgroundColor = Blue;
    Blue.innerText = `Background Color: ${Blue}`;
}

function colorChange(green) {
    const Green = document.getElementById("Green");
    document.body.style.backgroundColor = Green;
    Green.innerText = `Background Color: ${Green}`;
}