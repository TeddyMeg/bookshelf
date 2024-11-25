import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = useAppSelector(state => 
    state.books.books.find(b => b._id === id)
  );

  if (!book) {
    return <div className="text-center">Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-96"
              src={book.imageUrl}
              alt={book.title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              ISBN: {book.isbn}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{book.title}</h1>
            <p className="mt-2 text-xl text-gray-600">by {book.author}</p>
            <p className="mt-4 text-2xl font-bold text-indigo-600">${book.price}</p>
            <p className="mt-2 text-gray-500">Published: {book.publishedYear}</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">{book.description}</p>
            </div>
            <div className="mt-8">
              <Link
                to="/"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                ← Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};