const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);
function handlerForm(event) {

  event.preventDefault();
  const currentElement = event.currentTarget.elements;
  //  const mail = currentElement.email.value;
  //   const password = currentElement.password.value;
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  } 
    
     
    const dataForm = {
      email,
      password
    } 
    console.log(dataForm);
       event.currentTarget.reset(); 
}
//  event.currentTarget.reset();





