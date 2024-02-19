// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
// Crear una instancia de la aplicación Express
const app = express();


app.use(bodyParser.json());

// Ruta para enviar un mensaje, ya sea personalizado o no
app.get('/api/hello', (req, res) => {
    const message = req.query.message || 'World'; // si existe un mensaje lo manda a message y lo adjunta a Hello y si no manda World
    const response = { "message": `Hello ${message}` };
    res.json(response);
});

// Ruta para crear un nuevo usuario y devolver un mensaje personalizado
app.post('/api/users', async (req, res) => {
    const { name, lastname } = req.body;
    const response = { "message": `The user ${name} ${lastname} was created` };
    res.json(response);
});
// Iniciar el servidor
app.listen(3001, () => {
    console.log(`Servidor API web escuchando en http://localhost:3001`);
});
