// Description: This script handles the functionality of the check-in screen, including form submission and navigation.
// Aguardando a implementação do banco de dados para o check-in.

const btnSubmit = document.querySelector('.button-container')


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const cpfCoded = document.querySelector('input[name="cpf"]').value;
    const dadosPaciente = localStorage.getItem('patients');
    const pacientes = JSON.parse(dadosPaciente)

    if(pacientes === null || pacientes.length === 0){
        alert('Nenhum paciente encontrado. Por favor, cadastre-se primeiro.');
        return;
    }

    if(cpfCoded === ''){
        alert('Digite seu cpf');
        return;
    }

    const pacienteEncontrado = pacientes.find(paciente => paciente.cpf === cpfCoded) || [];

    if (pacienteEncontrado) {
        alert('Login realizado com sucesso para o paciente ' + pacienteEncontrado.name);
        window.location.href = '../../html/confirmacao-consulta/appointmentConfirmationScreen.html';
    } else {
        alert('Paciente não encontrado. Verifique seu CPF e tente novamente.');
    }

    
    
    
})