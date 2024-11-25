import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Edit, Trash2 } from 'lucide-react';
import { Book } from '../types/book';
import { useAppDispatch } from '../hooks/redux';
import { toggleFavorite, deleteBook } from '../store/bookSlice';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(book._id!));
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleFavorite(book._id!));
  };

  return (
    <Link to={`/book/${book._id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-64">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={handleFavorite}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <Heart
                className={`w-5 h-5 ${
                  book.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'
                }`}
              />
            </button>
            <Link
              to={`/edit/${book._id}`}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <Edit className="w-5 h-5 text-gray-500" />
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <Trash2 className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-lg font-bold text-indigo-600">${book.price}</p>
        </div>
      </div>
    </Link>
  );
};