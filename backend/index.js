require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const medicoRoutes = require('./routes/medicoRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/medicosDB', medicoRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
  })
  .catch(err => console.log(err));
