import express from 'express';
import { getAllBooks, createBook, deleteBook } from '../controllers/bookControllers.js';

const router = express.Router();

// GET /api/books - lista książek z informacją o autorze
router.get('/', getAllBooks);

// POST /api/books - dodanie książki
router.post('/', createBook);

// DELETE /api/books/:id - usunięcie książki
router.delete('/:id', deleteBook);

export default router;