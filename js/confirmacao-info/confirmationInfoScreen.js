
const btnConfirmation = document.querySelector('button[type="submit"]');
const changeInfoButton = document.getElementById('changeInformation');

btnConfirmation.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = '/html/checkin/checkInScreen.html';
})

changeInfoButton.addEventListener('click', (e) => {
    e.preventDefault();

   window.location.href = '/html/cadastro/registrationScreen.html';
})