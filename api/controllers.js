const Event = require("../models/Event");

exports.fetchEvent = async (eventId, next) => {
  try {
    const event = await Event.findById(eventId);
    return event;
  } catch (error) {
    next(error);
  }
};
exports.eventListFetch = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.eventById = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const specificEvent = await Event.findById(eventId);
    return res.json(specificEvent);
  } catch (error) {
    next(error);
  }
};

exports.fullEvent = async (req, res, next) => {
  try {
    const full = await Event.find({
      $expr: { $eq: ["$bookedSeats", "$numOfSeats"] },
    });
    return res.json(full);
  } catch (error) {
    next(error);
  }
};

exports.createEvent = async (req, res, next) => {
  try {
    const newEvent = Event.create(req.body);
    return res.status(204).json(newEvent);
  } catch (error) {
    next(error);
  }
};

exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(
      { _id: req.event.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    await req.event.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteMany = async (req, res, next) => {
  try {
    await Event.deleteMany(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.searchEvent = async (req, res, next) => {
  const { eventName } = req.params;
  try {
    const foundEvent = await Event.find({ name: eventName });
    return res.json(foundEvent);
  } catch (error) {
    next(error);
  }
};
