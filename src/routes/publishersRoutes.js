import express from 'express';
import publisherController from '../controllers/publishersController.js';

const router = express.Router();

router
  .get('/publishers', publisherController.listPublishers)
  .post('/publishers', publisherController.registerPublishers)
  .put('/publishers/:id', publisherController.updatePublishers)
  .get('/publishers/:id', publisherController.listPublishersById)
  .delete('/publishers/:id', publisherController.deletePublishers);

export default router;
