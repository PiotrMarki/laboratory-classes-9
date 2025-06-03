import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://MVC7:haslo123@cluster0.zme8lc6.mongodb.net/mvc-books-db?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas successfully!');
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Books & Authors API is running!' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});