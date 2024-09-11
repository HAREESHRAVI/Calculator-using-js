const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => handleInput(item.id);
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key >= 0 && key <= 9) {
    handleInput(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("equal");
  } else if (key === "Backspace") {
    handleInput("backspace");
  } else if (key === "Escape"|| key==="c"||key==="C") {
    handleInput("clear");
  }
});

function handleInput(input) {
  if (input == "clear") {
    display.innerText = "";
  } else if (input == "backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (display.innerText != "" && input == "equal") {
    display.innerText = eval(display.innerText);
  } else if (display.innerText == "" && input == "equal") {
    display.innerText = "Empty!";
    setTimeout(() => (display.innerText = ""), 2000);
  } else {
    display.innerText += input;
  }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
