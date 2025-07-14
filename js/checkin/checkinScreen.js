// Description: This script handles the functionality of the check-in screen, including form submission and navigation.
// Aguardando a implementação do banco de dados para o check-in.

const btnSubmit = document.querySelector('.button-container')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault() 
    window.location.href = '/html/confirmacao-consulta/appointmentConfirmationScreen.html';
})