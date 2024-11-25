import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import bookRoutes from './routes/books.js';
// import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/books', bookRoutes);
// app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelf')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});