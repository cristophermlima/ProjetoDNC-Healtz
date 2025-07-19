
const btnChangeInformation = document.querySelector('#changeInformation');
const btnConfirmation = document.querySelector('button[type="submit"]');

btnConfirmation.addEventListener('click', (e) => {
    e.preventDefault();
    

    window.location.href = '/html/confirmacao-checkin/confirmationCheckIn.html';
})

btnChangeInformation.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = '/html/checkin/checkInScreen.html';
})