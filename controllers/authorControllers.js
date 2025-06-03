import Author from '../models/Author.js';

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true, runValidators: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ error: 'Author not found' });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    
    const author = new Author({
      firstName,
      lastName
    });

    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};