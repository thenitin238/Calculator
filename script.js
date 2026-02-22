let display = document.getElementById("display")
function Apendvalue(value) {
    display.value += value;
}
function ClearDisplay() {
    display.value = "";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "error";
    }
}

document.addEventListener("keydown", function (event) {
    let key = event.key;
    // Numebers
    if (!isNaN(key)) {
        Apendvalue(key);
    }
    //operators
    else if (key == '+' || key == '-' || key == '*' || key == '/') {
        Apendvalue(key);
    }
    // BackSpace
    else if (key === "Backspace") {
        backspace();
    }
    //Decimal
    else if (key == '.') {
        Apendvalue(key);
    }
    //Calculate=Enter
    else if (key == "Enter") {
        calculate()
    }
    //Clr Dispaly=Escape
    else if (key == "Escape") {
        ClearDisplay();
    }
});