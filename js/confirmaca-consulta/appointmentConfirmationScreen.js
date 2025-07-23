import { medicos } from "../database/medicos.js";
const timeleft = document.querySelector('#time');
const btnSubmit = document.querySelector('button[type="submit"]');
const btnBack = document.querySelector('#changeInformation');



function startTimer(){
  let timeleftSeconds = 15*60;
  const interval = setInterval(() => {
    const minutes = Math.floor(timeleftSeconds / 60);
    const seconds = timeleftSeconds % 60;

    timeleft.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    timeleftSeconds--

    if(timeleftSeconds < 0){
      clearInterval(interval);
      timeleft.textContent = '00:00';
      alert('Tempo esgotado! Por favor, tente novamente.');
      timeleft.textContent = '00:00';
    }
  },1000);
}



btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const crmCoded = document.querySelector('input[name="crm"]').value;

  if(!crmCoded){
    alert('Numero Crm Inválido');
    return;
  }


  const medico = medicos.find((medico) => {
    return medico.crm === crmCoded;
  })

  if(!medico){
    alert('Médico não encontrado');
    return;
  } else {
    alert(`Consulta confirmada com o médico ${medico.name} de especialidade ${medico.speciality}`);
    window.location.href = '../../html/confirmacao-checkin/confirmationCheckin.html';
  }

})

btnBack.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '../../html/checkin/checkinScreen.html';
})

window.onload = startTimer;
