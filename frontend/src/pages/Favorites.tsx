import React from 'react';
import { BookCard } from '../components/BookCard';
import { useAppSelector } from '../hooks/redux';

export const Favorites: React.FC = () => {
  const { favorites } = useAppSelector(state => state.books);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Favorite Books</h1>
      
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map(book => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};