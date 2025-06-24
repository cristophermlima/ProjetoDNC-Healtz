// this file handles the registration screen functionality
// including form submission and navigation to the check-in screen.

const btnSaveInformation = document.querySelector('button[type="submit"]');
const btnBack = document.querySelector('#back');

btnSaveInformation.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../../html/FormularioCheckin/form.html';
})

btnBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../../html/telaDeBoasVindas/welcome.html';
})