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
});

const Event = mongoose.model('Event', {
  username: String,
  idUser: String,
  description: String,
  hour: String,
  date: String,
  place: String,
});

//crear Usuarios
const crearUsuaerio = async () => {
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

  await user.save();
};

//Obtener todos los Usuarios
const buscarTodo = async () => {
  const users = await User.find();
};

//Buscar retonar un array []
const buscar = async () => {
  const user = await User.find({ username: 'clperez341' });
};

//Obtener un usuario, reorna un obejeto {}
const buscarUno = async () => {
  const user = await User.findOne({ username: 'clperez341' });
};

//Actualizar Usuario
const actualizar = async () => {
  const user = await User.findOne({ username: 'clperez341' });
  await user.save();
};

//Eliminar Usuario
const eliminar = async () => {
  const user = await User.findOne({ username: 'clpp1994' });
  await user.remove();
};



//crear Evento
const crearEvento = async (username, id) => {
  const newEvent = new Event({
    username: username,
    idUser: id,
    description: 'reunion',
    hour: '14:00',
    date: '2022-11-22',
    place: 'Montenegro',
  });
  
  await newEvent.save();
};

//Obtener todos los Eventos
const buscarTodosEventos = async () => {
  const users = await Event.find();
};

//Buscar retonar un array []
const buscarEvento = async () => {
  const user = await Event.find({ username: 'clperez341' });
};

//Obtener un Evento, reorna un obejeto {}
const buscarUnEvento = async () => {
  const user = await Event.findOne({ username: 'clperez341' });
};

//Actualizar Evento
const actualizarEvento = async () => {
  const event = await Event.findOne({ username: 'clperez341' });
  await event.save();
};

//Eliminar Evento
const eliminarEvento = async () => {
  const event = await Event.findOne({ username: 'clpp1994' });
  await event.remove();
};