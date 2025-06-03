import express from 'express';
import { getAllAuthors, updateAuthor, createAuthor } from '../controllers/authorControllers.js';

const router = express.Router();

router.get('/', getAllAuthors);

router.put('/:id', updateAuthor);

router.post('/', createAuthor);

export default router;