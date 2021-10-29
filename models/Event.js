const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: String,
  name: String,
  email: String,
  image: String,
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Event", EventSchema);
