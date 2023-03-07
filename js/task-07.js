const inputField = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputField.addEventListener("change", inputHendlerChangeFontSize);
function inputHendlerChangeFontSize(event) {
    text.style.fontSize = event.currentTarget.value + 'px'
};


