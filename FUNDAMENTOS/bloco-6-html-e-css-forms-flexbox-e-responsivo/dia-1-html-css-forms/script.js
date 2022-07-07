const btnSubmit = document.querySelector("#submit");
const checkboxPicture = document.getElementById("con2");
let fieldName = document.querySelector("#name");
let fieldEmail = document.querySelector("#email");
let fieldText = document.querySelector("#text-area");

function verifyCheckbox() {
  let divPicture = document.getElementById("submit-picture");
  if (checkboxPicture.checked) {
    divPicture.disabled = false;
  } else {
    divPicture.disabled = true;
  }
}
function getUserValue(event) {
  if (fieldName.value.length >= 10 && fieldName.value.length <= 50 && fieldEmail.value.length >= 10 && fieldEmail.value.length <= 40 && fieldText.value.length <= 500) {
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
  } else {
    event.preventDefault();
    alert('Dados Inválidos')
  }
}

checkboxPicture.addEventListener("click", verifyCheckbox);
btnSubmit.addEventListener("click", getUserValue);
