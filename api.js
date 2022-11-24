const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controller');
const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect(
  'mongodb+srv://leandroperez:l3nghUsQfWYGaGvh@clusteragendame.jklxvhg.mongodb.net/bdagendame?retryWrites=true&w=majority'
);




app.get('/', user.list);

app.post('/',user.create);

app.get('/:id', user.getOne);

app.put('/:id', user.update);

app.patch('/:id', user.update);

app.delete('/:id', user.destroy);

app.get('*', (req, res) => {
  res.status(404).send(' Recurso no encontrado !!!');
},)

app.listen(port, () => {
  console.log('Iniciando servidor Node para Agéndame...');
});
