// let displayBox = document.querySelector(".display");

// function showDisplay(event) {
//     const x = event.target.innerText;
//     if (displayBox.innerHTML == 0) {
//         return displayBox.innerHTML = x;
//     }
//     return displayBox.innerHTML += x;
// }

// function calculate() {
//     let result = displayBox.innerText;
//     displayBox.innerText = eval(result);
// };

// function allClear() {
//     displayBox.innerText = 0;
// }

// function clear() {
//     let text = displayBox.innerText;
//     if (text.length === 1) {
//         displayBox.innerText = 0;
//     } else { 
//         displayBox.innerText = text.substring(0, text.length - 1)
//     }
// }

// document.querySelector(".calculate").addEventListener("click", calculate);
// document.querySelector(".all-clear").addEventListener("click", allClear);
// document.querySelector(".clear-last").addEventListener("click", clear);
// let list = document.querySelectorAll(".show-display");
// list.forEach(item => {
//     item.addEventListener("click", showDisplay)
// })





// let display = document.querySelector(".display");
// let showDisplay = document.querySelectorAll(".show-display");
// let calculate = document.querySelector(".calculate");
// let allClear = document.querySelector(".all-clear");
// let clearLast = document.querySelector(".clear-last");

// showDisplay.forEach(item => {
//     item.addEventListener("click", click);
// });
// calculate.addEventListener("click", calculated);
// allClear.addEventListener("click", clearAll);
// clearLast.addEventListener("click", oneClear);

// function click(event) {
//     if (display.innerText == 0) {
//         display.innerHTML = event.target.innerText;
//     } else {
//         display.innerHTML += event.target.innerText;
//     }
// };
// function calculated() {
//     let result = display.innerText
//     display.innerHTML = eval(result)
// };
// function clearAll() {
//     display.innerText = 0;
// };
// function oneClear() {
//     let result1 = display.innerText;
//     if (result1.length == 1) {
//         display.innerText = 0;
//     } else {
//         display.innerHTML = result1.substring(0, result1.length - 1);
//     }
// };

//---------------------------------------------------------

const allClear = document.querySelector(".all-clear");
const clearLast = document.querySelector(".clear-last");
const calculate = document.querySelector(".calculate");
let display = document.querySelector(".display");
const keys = document.querySelectorAll(".show-display");

for (const item of keys) {
    item.addEventListener("click", function () {
        if (display.innerText == 0) {
            display.innerText = item.innerText
        } else {
            display.innerText += item.innerText
        }
    })
};

allClear.addEventListener("click", function () {
    display.innerText = 0;
});

clearLast.addEventListener("click", function () {
    let x;
    if (display.innerText.length == 1) {
        console.log(display.innerText.length)
        display.innerText = 0
    } else {
        x = display.innerText.slice(0, -1);
        display.innerText = x
    }
});

calculate.addEventListener("click", function () {
    let result = eval(display.innerText)
    display.innerText = result
})

