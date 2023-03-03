let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueShow = document.querySelector('#value');

decrement.addEventListener("click", btnDecrementHandler);
increment.addEventListener("click", btnIncrementHandler);


function btnDecrementHandler(event) { 
    counterValue -= 1;
    valueShow.textContent = counterValue;
    
}

function btnIncrementHandler(event) { 
    counterValue += 1;
    valueShow.textContent = counterValue;
}

