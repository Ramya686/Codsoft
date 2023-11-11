function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const expression = document.getElementById("display").value;
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("input[type='button']");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const value = buttons[i].value;
      if (value === "=") {
        calculate();
      } else if (value === "C") {
        clearDisplay();
      } else {
        appendToDisplay(value);
      }
    });
  }
});
