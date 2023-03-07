const validation = document.querySelector("#validation-input");
const textDatasetLength = Number(validation.dataset.length);
validation.addEventListener("blur", eventHandler);

function eventHandler(event) {
    if (event.currentTarget.value.length === textDatasetLength) {
        validation.classList.remove("invalid");
        validation.classList.add("valid");
    } else {
         validation.classList.remove("valid");
         validation.classList.add("invalid");   
    }
         
};
   


