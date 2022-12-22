import express from 'express';
import bookController from '../controllers/booksController.js';

const router = express.Router();

router
  .get('/books', bookController.listBooks)
  .get('/books/busca', bookController.listBooksByPublisher)
  .get('/books/:id', bookController.listBooksById)
  .post('/books', bookController.registerBooks)
  .put('/books/:id', bookController.updateBooks)
  .delete('/books/:id', bookController.deleteBooks);

export default router;
