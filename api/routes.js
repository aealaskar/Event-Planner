const express = require("express");
const router = express.Router();
const {
  eventListFetch,
  createEvent,
  updateEvent,
  eventById,
  deleteEvent,
  fullEvent,
  deleteMany,
} = require("./controllers");

router.get("/fullybooked", fullEvent);
router.get("/", eventListFetch);
router.get("/:eventId", eventById);
router.post("/", createEvent);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);
router.delete("/", deleteMany);

module.exports = router;
