const router = require('express').Router();
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');

router.post('/events', createEvent);
router.get('/events', getEvents);
router.get('/events/:id', getEvent);
router.patch('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;