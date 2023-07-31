let counterValue = 0;

const minButton = document.querySelector('button[data-action = "decrement"]');
const plButton = document.querySelector('button[data-action = "increment"]');
const value = document.querySelector("#value")

minButton.addEventListener("click", btnDecrement);
plButton.addEventListener("click", btnIncrement);

function btnDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function btnIncrement() {
    counterValue += 1;
    value.textContent = counterValue
}