const changeColor = document.querySelector("button.change-color");
const bodyColor = document.querySelector('body');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", changeBgColor);

function changeBgColor() { 
bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
}
 console.log(bodyColor.style.backgroundColor);


