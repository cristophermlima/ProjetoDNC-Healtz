// Description: This script handles the functionality of the check-in screen, including form submission and navigation.
// Aguardando a implementação do banco de dados para o check-in.

const btnSubmit = document.querySelector('.button-container')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'));
    const cpfDigitado = document.getElementById("cpf").value.trim();
    if (!userData.cpf) {
        alert("Nenhum dado de usuário encontrado. Por favor, preencha o formulário de registro primeiro.");
        return;
    }
    

    //Logica simples, depois tenho que alterar pra procurar em todos os dados cadastrados usando o find
    if(cpfDigitado == userData.cpf) {
        alert("Check-in realizado com sucesso!");
    };
    window.location.href = '/html/confirmacao-consulta/appointmentConfirmationScreen.html';
})