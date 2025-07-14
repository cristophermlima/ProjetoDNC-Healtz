// this file handles the registration screen functionality
// including form submission and navigation to the check-in screen.


const btnSaveInformation = document.querySelector('button[type="submit"]');
const btnBack = document.querySelector('#back');


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

// verify if the form is valid

function validateForm(data){
    const cpfRegex = /^[0-9]{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    if (!cpfRegex.test(data.cpf)) {
    alert("CPF inválido. Deve conter exatamente 11 números.");
    return false;
  }

    if (!emailRegex.test(data.email)) {
    alert("Email inválido.");
    return false;
  }

  if (!phoneRegex.test(data.phone)) {
    alert("Telefone inválido. Deve conter entre 10 e 11 dígitos numéricos.");
    return false;
  }

  return true;
}

// mask for phone
document.getElementById("phone").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 12){
    value = value.slice(0, 12);
  } 

  if (value.length <= 11) {
    e.target.value = value.replace(/(\d{2})(\d{10})/, "($1) $2-$3");
  } else {
    e.target.value = value.replace(/(\d{2})(\d{10})(\d{0,4})/, "($1) $2-$3");
  }
});



// mask for zip-code
document.getElementById("zip-code").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 8) value = value.slice(0, 8);
  e.target.value = value.replace(/(\d{9})(\d{0,3})/, "$1-$2");
});



// btnSaveInformation
btnSaveInformation.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = getFormData();

  if (!validateForm(formData)) return;

  localStorage.setItem('userData', JSON.stringify(formData));

  console.log("Cliente salvo no localStorage:", formData);

  window.location.href = '../../html/confirmacao-info/confirmationInfoScreen.html';
});

// btnBack
btnBack.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '../../html/boasvindas/welcome.html';
});
