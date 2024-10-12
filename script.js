const output = document.querySelector(".eq-field");
const btns = document.querySelectorAll(".btn");
let result = 0;
function displayOutput() {
    output.textContent = result;
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.value;
        if (!value) {
            value = e.target.parentElement.value;
        }
        if (e.target.classList.contains("operator")) {
            result = String(result);
            if(result.endsWith("+") || result.endsWith("-") || result.endsWith("*") || result.endsWith("/") || result.endsWith("%") || result.endsWith("^")){
                result = result.slice(0, -1);
            }
        }
        if (value === "clear") {
            output.textContent = "0";
            result = 0;
        } else if (value === "=") {
            result = Number(eval(result))
        } else if (value === "backspace") {
            result = result.toString().slice(0, -1);
        }
        else {
            if (result === 0) {
                result = value;
            } else {
                result += value;
            }
        }
        displayOutput();
    });
});