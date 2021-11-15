import express from 'express';

import { getEvents, createEvent, deleteEvent } from '../Controllers/events';

const router = express.Router();

router.get('/get_events', getEvents);
router.post('/add_events', createEvent);
router.delete('/delete_event/:id', deleteEvent);

export default router;

