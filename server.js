const express = require('express');
const path = require('path');

const app = express();

// Servir los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta de inicio que sirve el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendose en el puerto ${port}`);
});
