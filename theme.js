
const indicator = document.querySelector(".indicator");
const indicator1 = document.querySelector(".indicator1");
const indicator2 = document.querySelector(".indicator2");
const body = document.getElementById('myBody');
const calculator = document.getElementById("calc");




indicator.addEventListener("click", () => {

    body.classList.remove("theme1", "theme2", "theme3");
    body.classList.add('theme1');
    calculator.classList.remove("theme1", "theme2", "theme3");
    calculator.classList.add('theme1');
});

indicator1.addEventListener("click", () => {

    body.classList.remove("theme1", "theme2", "theme3");
    body.classList.add('theme2');
    calculator.classList.remove("theme1", "theme2", "theme3");
    calculator.classList.add('theme2');
});


indicator2.addEventListener("click", () => {

    body.classList.remove("theme1", "theme2", "theme3");
    body.classList.add('theme3');
    calculator.classList.remove("theme1", "theme2", "theme3");
    calculator.classList.add('theme3');
});
