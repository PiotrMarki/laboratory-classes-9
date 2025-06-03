import express from 'express';
import { getAllAuthors, updateAuthor, createAuthor } from '../controllers/authorControllers.js';

const router = express.Router();

// GET /api/authors - lista autorów
router.get('/', getAllAuthors);

// PUT /api/authors/:id - edycja autora
router.put('/:id', updateAuthor);

// POST /api/authors - dodanie autora (pomocne do testowania)
router.post('/', createAuthor);

export default router;