document.addEventListener(`DOMContentLoaded`, function() {
    const h2 = document.getElementById(`special`);
    h2.style.backgroundColor = `yellow`;

    const alerts = document.getElementsByClassName(`alert`);
    for (let alert of alerts) {
        alert.style.border = `1px solid gray`;
    }


    const stops = document.getElementsByClassName(`stop`);
    if (stops.length > 0) {
        for (let alert of alerts) {
            alert.style.backgroundColor = `red`;
        }
    }

    const goElements = document.getElementsByClassName(`go`);
    if (goElements.length > 0) {
        for (let alert of alerts) {
            alert.style.backgroundColor = `green`;
        }
    }
    
});

// ბოლო კოდი რადგან მწვანეა მხოლოდ მწვანედ ცვლის 