
const btnConfirmation = document.querySelector('button[type="submit"]');
const changeInfoButton = document.getElementById('changeInformation');

// function to get form Values
function getAndSetValues() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    if (patients.length === 0) {
        alert("Nenhum paciente encontrado.");
        return;
    }

    const lastPatient = patients[patients.length - 1];

    const cpf = document.getElementById("cpf");
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const healthPlan = document.getElementById("heath-plan");
    const planNumber = document.getElementById("plan-number");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const zipCode = document.getElementById("zip-code");
    const address = document.getElementById("address");
    const neighborhood = document.getElementById("neighborhood");
    const complement = document.getElementById("complement");
    const uf = document.getElementById("uf");
    const city = document.getElementById("city");

    cpf.value = lastPatient.cpf || '';
    name.value = lastPatient.name || '';
    age.value = lastPatient.age || '';
    healthPlan.value = lastPatient.healthPlan || '';
    planNumber.value = lastPatient.planNumber || '';
    email.value = lastPatient.email || '';
    phone.value = lastPatient.phone || '';
    zipCode.value = lastPatient.zipCode || '';
    address.value = lastPatient.address || '';
    neighborhood.value = lastPatient.neighborhood || '';
    complement.value = lastPatient.complement || '';
    uf.value = lastPatient.uf || '';
    city.value = lastPatient.city || '';
}

btnConfirmation.addEventListener('click', (e) => {
    e.preventDefault();


    window.location.href = '/html/checkin/checkInScreen.html';
})

changeInfoButton.addEventListener('click', (e) => {
    e.preventDefault();

   window.location.href = '/html/cadastro/registrationScreen.html';
})

getAndSetValues();