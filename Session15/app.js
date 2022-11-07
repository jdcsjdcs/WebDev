const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let choice;
let result;
let operators = ["+", "-", "/", "*"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let calculated = false;
let num1 = 0;
let num2 = 0;

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        choice = e.target.textContent;

        // clear display after calculation
        if (calculated) {
            clearDisplay();
            calculated = false;
        }
        
        if (choice === "C") {
            clear();
        } else if (choice === "AC") {
            clearDisplay();
        } else if (choice === "=") {
            calculate();
            calculated = true;

            // to pevent display more opereators
        } else if (
            operators.includes(choice) &&
            ([...display.textContent].some((input) =>
                operators.includes(input)
            ) ||
                display.textContent[display.textContent.length - 1] === ".")
        ) {
            display.append("");
        } else if (
            choice === "." &&
            (display.textContent[display.textContent.length - 1] === "." ||
                operators.includes(
                    display.textContent[display.textContent.length - 1]
                ))
        ) {
            display.append("");
        } else if (
            choice === "." &&
            [...display.textContent].includes(".") &&
            ![...display.textContent].some((input) => operators.includes(input))
        ) {
            display.append("");
        }

        // to pevent starting with operator or floating point
        else if (
            display.textContent === "" &&
            (operators.includes(choice) || choice === ".")
        ) {
            display.append("");

            // to prevent numbers after 0
        } else if (display.textContent === "0" && numbers.includes(choice)) {
            display.append("");
        } else {
            display.append(choice);
        }
    });
}

function calculate() {
    if (display.textContent.includes("+")) {
        [num1, num2] = display.textContent.split("+");
        if (num2 === "") {
            display.textContent = "error: enter second number";
        } else {
            display.textContent = parseFloat(num1) + parseFloat(num2);
        }
    } else if (display.textContent.includes("-")) {
        [num1, num2] = display.textContent.split("-");
        if (num2 === "") {
            display.textContent = "error: enter second number";
        } else {
            display.textContent = parseFloat(num1) - parseFloat(num2);
        }
    } else if (display.textContent.includes("*")) {
        [num1, num2] = display.textContent.split("*");
        if (num2 === "") {
            display.textContent = "error: enter second number";
        } else {
            display.textContent = parseFloat(num1) * parseFloat(num2);
        }
    } else if (display.textContent.includes("/")) {
        [num1, num2] = display.textContent.split("/");

        // divide by zero error message
        if (parseFloat(num2) === 0) {
            display.textContent = "Cannot divide by zero";
        } else if (num2 === "") {
            display.textContent = "error: enter second number";
        } else {
            display.textContent = parseFloat(num1) / parseFloat(num2);
        }
    }
}

function clearDisplay() {
    display.textContent = "";
}
function clear() {
    display.textContent = display.textContent.slice(0, -1);
}
