const changeColor = document.querySelector("button.change-color");
const bodyColor = document.querySelector('body');
const spanText = document.querySelector('span');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", changeBgColor);


function changeBgColor() { 
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  spanText.textContent = bodyColor.style.backgroundColor;
}

 


