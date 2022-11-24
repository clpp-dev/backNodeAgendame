const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller');
const event = require('./event.controller')
const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect(
  'mongodb+srv://leandroperez:l3nghUsQfWYGaGvh@clusteragendame.jklxvhg.mongodb.net/bdagendame?retryWrites=true&w=majority'
);


// Rutas de CRUD USUARIOS
app.get('/user', user.list);

app.post('/user',user.create);

app.get('/user/:id', user.getOne);

app.put('/user/:id', user.update);

app.patch('/user/:id', user.update);

app.delete('/user/:id', user.destroy);


// Rutas de CRUD EVENTOS
app.get('/event', event.list);

app.post('/event',event.create);

app.get('/event/:id', event.getOne);

app.put('/event/:id', event.update);

app.patch('/event/:id', event.update);

app.delete('/event/:id', event.destroy);

app.get('*', (req, res) => {
  res.status(404).send(' Recurso no encontrado !!!');
},)

app.listen(port, () => {
  console.log('Iniciando servidor Node para Agéndame...');
});
