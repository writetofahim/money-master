const incomeField = document.getElementById("income-input-id");
const foodInputField = document.getElementById("food-input-id");
const rentInputField = document.getElementById("rent-input-id");
const clothesInputField = document.getElementById("clothes-input-id");
const balanceField = document.getElementById("balance-id");
const expensesField = document.getElementById("expenses-id");

function validateNumberInput(inputField) {
  if (isNaN(inputField.value)) {
    alert("Please enter a valid number!");
    inputField.value = "";
    inputField.focus();
  }
}
function calculator() {
  const totalExpenses =
    parseFloat(foodInputField.value) +
    parseFloat(rentInputField.value) +
    parseFloat(clothesInputField.value);
  const totalIncome = parseFloat(incomeField.value);
  const balance = totalIncome - totalExpenses;
  return [totalExpenses, balance];
}

incomeField.addEventListener("change", function () {
  validateNumberInput(incomeField);
});

foodInputField.addEventListener("change", function () {
  validateNumberInput(foodInputField);
});

rentInputField.addEventListener("change", function () {
  validateNumberInput(rentInputField);
});

clothesInputField.addEventListener("change", function () {
  validateNumberInput(clothesInputField);
});

document.getElementById("calculate-btn").addEventListener("click", function () {
  const cal = calculator();
  balanceField.innerText = cal[1];
  expensesField.innerText = cal[0];
});
