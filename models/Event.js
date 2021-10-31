const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  organizer: {
    type: String,
    maxLength: 20,
    unique: true,
  },
  name: String,
  email: String,
  image: { type: String, required: true },
  numOfSeats: { type: Number, min: 5 },
  bookedSeats: { type: Number, default: 0 },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Event", EventSchema);
