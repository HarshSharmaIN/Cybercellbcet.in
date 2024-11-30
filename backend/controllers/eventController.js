const Event = require("../models/eventsModel");

async function createEvent(req, res) {
  try {
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({ message: "All Fields are required" });
    }
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getEvents(req, res) {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function updateEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (req.body.name) event.name = req.body.name;
    if (req.body.description) event.description = req.body.description;

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    await event.remove();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createEvent, getEvents, getEvent, updateEvent, deleteEvent };
