const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);
function handlerForm(event) {

  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  } else
    console.log(`{email: ${email
      .value}, Password: ${password.value}}`);
    event.currentTarget.reset();
}






