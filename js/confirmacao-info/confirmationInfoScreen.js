
const btnConfirmation = document.querySelector('button[type="submit"]');
const changeInfoButton = document.getElementById('changeInformation');
const spinner = btnConfirmation.querySelector('.spinner');
spinner.style.display = 'none';


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
    const healthPlan = document.getElementById("health-plan");
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

btnConfirmation.addEventListener('click', async (e) => {
    e.preventDefault();

    
    spinner.style.display = 'inline-block';
    btnConfirmation.disabled = true;

    try {
        const response = await fetch("https://api.sheetmonkey.io/form/eyi18kqUGdE19VUTVf97WV", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cpf: document.getElementById("cpf").value,
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                healthPlan: document.getElementById("health-plan").value,
                planNumber: document.getElementById("plan-number").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                zipCode: document.getElementById("zip-code").value,
                address: document.getElementById("address").value,
                neighborhood: document.getElementById("neighborhood").value,
                complement: document.getElementById("complement").value,
                uf: document.getElementById("uf").value,
                city: document.getElementById("city").value
            })
        });

        if (response.ok) {
            window.location.href = '/html/checkin/checkInScreen.html';
        } else {
            alert("Erro ao enviar os dados. Verifique as informações e tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);
        alert("Erro na conexão com o servidor.");
    } finally{
        btnText.textContent = "Enviar";
        spinner.hidden = true;
        btnConfirmation.disabled = false;
    }
})

changeInfoButton.addEventListener('click', (e) => {
    e.preventDefault();

   window.location.href = '/html/cadastro/registrationScreen.html';
})

getAndSetValues();