const Users = require('./UserModel');

const User = {
  login: async (req, res) => {
    console.log('🚀 > > > > login: > > > > req', req.body);
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if(user && password === user.password){
      console.log('EXITO')
      res.status(200).send(user);
      return;
    }
    res.status(404).send('Usuario no encontrado !!!');
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    res.status(200).send(user);
  },
  list: async (req, res) => {
    const users = await Users.find();
    res.status(200).send(users);
  },
  create: async (req, res) => {
    const user = new Users(req.body);
    const savedUser = await user.save();
    console.log('🚀 > > > > create: > > > > savedUser', savedUser);
    res.status(201).send(savedUser._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    Object.assign(user, req.body);
    await user.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    if (user){
      await user.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = User;
