// this file handles the registration screen functionality
// including form submission and navigation to the check-in screen.


const btnSaveInformation = document.querySelector('button[type="submit"]');
const btnBack = document.querySelector('#back');
let isValid = true;


// function to get form Values

function getFormData(){
    return {
        cpf: document.getElementById("cpf").value.trim(),
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        healthPlan: document.getElementById("heath-plan").value.trim(),
        planNumber: document.getElementById("plan-number").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        zipCode: document.getElementById("zip-code").value.trim(),
        address: document.getElementById("address").value.trim(),
        neighborhood: document.getElementById("neighborhood").value.trim(),
        complement: document.getElementById("complement").value.trim(),
        uf: document.getElementById("uf").value.trim(),
        city: document.getElementById("city").value.trim()
    }
}

//Verify if the form is valid

const validators = {
  cpf: (value) => value.length === 11 && !isNaN(value),
  name: (value) => value.length >= 2,
  age: (value) => {
    const num = parseInt(value);
    return !isNaN(num) && num > 0 && num < 120;
  },
  email: (value) => {
    const arroba = value.indexOf("@");
    const dot = value.lastIndexOf(".");
    return arroba > 0 && dot > arroba + 1 && dot < value.length - 1;
  },
  phone: (value) => value.length >= 10 && value.length <= 11 && !isNaN(value),
  "zip-code": (value) => value.length === 8 && !isNaN(value),
  "heath-plan": (value) => value.length > 0,
  "plan-number": (value) => value.length > 0,
  address: (value) => value.length > 3,
  neighborhood: (value) => value.length > 2,
  complement: (value) => true,
  uf: (value) => value.length === 2,
  city: (value) => value.length > 2
};

// add event listeners to inputs for validation
Object.keys(validators).forEach((fieldId) => {
  const input = document.getElementById(fieldId);
  if (!input) return

  input.addEventListener("input", (e) => {
    const value = input.value.trim();
    const isValid = validators[fieldId](value);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
  });
});



btnSaveInformation.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = getFormData();
  const inputs = document.querySelectorAll("input");

  let allValid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();

    if (value === "" || !input.classList.contains("valid")) {
      input.classList.remove("valid");
      input.classList.add("invalid");
      allValid = false;
    }
  });

  if (!allValid) {
    alert("Por favor, corrija os campos inválidos antes de continuar.");
    return;
  }

  localStorage.setItem("userData", JSON.stringify(formData));
  console.log("Cliente salvo no localStorage:", formData);
  window.location.href = "/html/confirmacao-info/confirmationInfoScreen.html";
});

// btnBack
btnBack.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '../../html/boasvindas/welcome.html';
});
