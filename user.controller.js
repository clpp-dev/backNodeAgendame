const User = {
  get:  (req, res) => {
    res.status(200).send('Consulta un elemento !!!');
  },
  list: (req, res) => {
    res.status(200).send('EXITO!!!');
  },
  create:  (req, res) => {
    res.status(201).send(' CREADO !!!');
  },
  update:  (req, res) => {
    res.status(204).send('Actualizando !!!');
  },
  destroy:  (req, res) => {
    res.status(204).send('ELIMINADO !!!');
  },
};

module.exports = User