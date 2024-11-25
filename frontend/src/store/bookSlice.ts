import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book, BookState } from '../types/book.ts';

const API_URL = 'https://bookshelf-server-npl7.onrender.com/api';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book: Omit<Book, '_id'>) => {
  const response = await axios.post(`${API_URL}/books`, book);
  return response.data;
});

export const updateBook = createAsyncThunk('books/updateBook', async (book: Book) => {
  const response = await axios.put(`${API_URL}/books/${book._id}`, book);
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id: string) => {
  await axios.delete(`${API_URL}/books/${id}`);
  return id;
});

const initialState: BookState = {
  books: [],
  favorites: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const book = state.books.find(b => b._id === action.payload);
      if (book) {
        book.isFavorite = !book.isFavorite;
        if (book.isFavorite) {
          state.favorites.push(book);
        } else {
          state.favorites = state.favorites.filter(b => b._id !== action.payload);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch books';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(b => b._id === action.payload._id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(b => b._id !== action.payload);
        state.favorites = state.favorites.filter(b => b._id !== action.payload);
      });
  },
});

export const { toggleFavorite } = bookSlice.actions;
export default bookSlice.reducer;