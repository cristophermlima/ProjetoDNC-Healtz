
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('doctor').value;
    const crm = document.getElementById('crm').value;
    const especialidade = document.getElementById('specialty').value;

    try {
      const response = await fetch('http://localhost:3000/api/medicosDB/verificar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, crm, especialidade })
      });

      const data = await response.json();

      if (data.encontrado) {
        window.location.href = '../../html/confirmacao-checkin/confirmationCheckin.html';
      } else {
        alert('Médico não encontrado. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      console.error('Erro na verificação:', error);
      alert('Erro ao tentar verificar o médico.');
    }
  });
});

