// Description: This script handles the navigation for the welcome screen buttons.

const btnGetStarted = document.querySelector('.btn-1') 
const btnLogin = document.querySelector('.btn-2')

btnGetStarted.addEventListener('click', () => {
    window.location.href = '/html/cadastro/registrationScreen.html'
})

btnLogin.addEventListener('click', () => {
    window.location.href = '/html/checkin/checkInScreen.html'
})

// The above code adds click event listeners to the "Get Started" and "Login" buttons.
