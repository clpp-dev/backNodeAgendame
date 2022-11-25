const Events = require('./EventModel');

const Event = {
  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await Events.findOne({ _id: id });
    res.status(200).send(user);
  },
  list: async (req, res) => {
    const events = await Events.find();
    res.status(200).send(events);
  },
  listByUser: async (req, res) => {

    console.log('🚀 > > > > listByUser: > > > > req', req.params);

    const { idUser } = req.params;
    const events = await Events.find({ idUser: idUser });

    res.status(200).send(events);
  },
  create: async (req, res) => {
    const event = new Events(req.body);
    const savedEvent = await event.save();
    console.log('🚀 > > > > create: > > > > savedEvent', savedEvent);
    res.status(201).send(savedEvent._id);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const event = await Events.findOne({ _id: id });
    Object.assign(event, req.body);
    await event.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const event = await Events.findOne({ _id: id });
    if (event) {
      await event.remove();
    }
    res.sendStatus(204);
  },
};

module.exports = Event;
