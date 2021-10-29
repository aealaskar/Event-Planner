const Event = require("../models/Event");

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
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndUpdate(eventId, req.body, {
      new: true,
    });
    if (event) {
      return res.json(event);
    } else {
      next({ status: 404, message: "Event not found!" });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const findEvent = await Event.remove({ _id: eventId });
    if (findEvent) {
      return res.status(204).end();
    } else {
      next({ status: 404, message: "Event not found!" });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteMany = async (req, res, next) => {
  try {
    const deleteMany = await Event.deleteMany(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
