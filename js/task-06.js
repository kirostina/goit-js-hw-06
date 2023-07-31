const inputValidation = document.querySelector("#validation-input");
inputValidation.addEventListener("blur", selectBlur);

function selectBlur(evt) {
    const textLength = evt.currentTarget.value.length;

    if (textLength === Number(inputValidation.dataset.length)) {
        inputValidation.classList.add("valid");
        inputValidation.classList.remove("invalid");
    }
    else {
        inputValidation.classList.add("invalid");
        inputValidation.classList.remove("valid");
    }
}