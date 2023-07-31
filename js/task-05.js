const nomInput = document.querySelector("#name-input");
const nomOutput = document.querySelector("#name-output");
nomInput.addEventListener("input", nameInput);

function nameInput(evt) {
    nomOutput.textContent = evt.currentTarget.value === "" ? "Anonymous" : evt.currentTarget.value;
}