const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://leandroperez:l3nghUsQfWYGaGvh@clusteragendame.jklxvhg.mongodb.net/bdagendame?retryWrites=true&w=majority'
);

const User = mongoose.model('User', {
  username: String,
  nombre: String,
  apellidos: String,
  edad: Number,
  ocupacion: String,
  email: String,
  password: String,
  eventos: [{}],
});

//crear Usuarios
const crear = async () => {
  const user = new User({
    username: 'clpp1994',
    nombre: 'cristian',
    apellidos: 'perez',
    edad: 28,
    ocupacion: 'dev',
    email: 'clpp1994@gmail.com',
    password: '123456Usuario',
    eventos: [{}],
  });

  const savedUser = await user.save();
  console.log('🚀 > > > > crear > > > > savedUser', savedUser);
};

//Obtener todos los Usuarios
const buscarTodo = async () => {
  const users = await User.find();
  console.log('🚀 > > > > buscarTodo > > > > users', users);
};

//Buscar
const buscar = async () => {
  const user = await User.find({ username: 'clperez341' });
  console.log('🚀 > > > > buscarTodo > > > > user', user);
};

//Obtener un usuario
const buscarUno = async () => {
  const user = await User.findOne({ username: 'clperez341' });
  console.log('🚀 > > > > buscarTodo > > > > user', user);
};

//Actualizar Usuario
const actualizar = async () => {
  const user = await User.findOne({ username: 'clperez341' });
  user.edad = 30;
  await user.save();
  console.log('🚀 > > > > buscarTodo > > > > user', user);
};

//Eliminar Usuario
const eliminar = async () => {
  const user = await User.findOne({ username: 'clpp1994' });
  await user.remove();
};

crear();
