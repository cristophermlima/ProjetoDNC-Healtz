const express = require('express');
const router = express.Router();
const Medico = require('../models/Medico');

router.get('/', async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar médicos' });
  }
});

router.post('/verificar', async (req, res) => {
  const { nome, especialidade, crm } = req.body;
     console.log('Dados recebidos:', req.body);

  try {
    const medico = await Medico.findOne({
      nome: new RegExp(`^${nome}$`, 'i'),
      especialidade: new RegExp(`^${especialidade}$`, 'i'),
      crm: crm
    });

    console.log('Médico encontrado:', medico);
    if (medico) {
      res.json({ encontrado: true });
    } else {
      res.json({ encontrado: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao verificar médico' });
  }
});



module.exports = router;
