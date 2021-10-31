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
  searchEvent,
  fetchEvent,
} = require("./controllers");

// param Middleware
router.param("eventId", async (req, res, next, eventId) => {
  const event = await fetchEvent(eventId, next);
  if (event) {
    req.event = event;
    next();
  } else {
    next({ status: 404, message: "Event not found!" });
  }
});

router.get("/fullybooked", fullEvent);
router.get("/events/:eventName", searchEvent);
router.get("/:eventId", eventById);
router.get("/", eventListFetch);
router.post("/", createEvent);
router.put("/:eventId", updateEvent);
router.delete("/:eventId", deleteEvent);
router.delete("/", deleteMany);

module.exports = router;
