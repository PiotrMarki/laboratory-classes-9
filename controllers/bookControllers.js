import Book from '../models/Book.js';
import Author from '../models/Author.js';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author', 'firstName lastName');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const { title, year, author } = req.body;

    const authorExists = await Author.findById(author);
    if (!authorExists) {
      return res.status(400).json({ error: 'Author not found' });
    }

    const book = new Book({
      title,
      year,
      author
    });

    const savedBook = await book.save();
    const populatedBook = await Book.findById(savedBook._id).populate('author', 'firstName lastName');
    
    res.status(201).json(populatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};