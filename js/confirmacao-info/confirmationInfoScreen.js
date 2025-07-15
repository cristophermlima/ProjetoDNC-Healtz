
const btnConfirmation = document.querySelector('button[type="submit"]');
const changeInfoButton = document.getElementById('changeInformation');

// function to get form Values
function getAndSetValues() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData)

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

    cpf.value = userData.cpf || '';
    name.value = userData.name || '';
    age.value = userData.age || '';
    healthPlan.value = userData.healthPlan || '';
    planNumber.value = userData.planNumber || '';
    email.value = userData.email || '';
    phone.value = userData.phone || '';
    zipCode.value = userData.zipCode || '';
    address.value = userData.address || '';
    neighborhood.value = userData.neighborhood || '';
    complement.value = userData.complement || '';
    uf.value = userData.uf || '';
    city.value = userData.city || '';
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