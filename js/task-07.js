const textInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');
textInput.addEventListener('input', sizeChange);

function sizeChange(evt) {
    const size = evt.currentTarget.value;
    textOutput.style.fontSize = `${size}px`;
}