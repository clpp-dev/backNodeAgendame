const Users = require('./UserModel');

const User = {
  getOne: async (req, res) => {
    res.status(200).send('Consulta un elemento !!!');
  },
  list: async (req, res) => {
    const users = await Users.find()
    res.status(200).send(users);
  },
  create: async (req, res) => {
    console.log('🚀 > > > > create: > > > > req', req.body);
    res.status(201).send(' CREADO !!!');
  },
  update: async (req, res) => {
    res.status(204).send('Actualizando !!!');
  },
  destroy: async (req, res) => {
    res.status(204).send('ELIMINADO !!!');
  },
};

module.exports = User