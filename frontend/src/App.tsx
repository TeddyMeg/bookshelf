import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Library, Heart, PlusCircle, User, LogOut } from 'lucide-react';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { BookDetails } from './pages/BookDetails';
import { BookForm } from './components/BookForm';
import { AuthForm } from './components/AuthForm';
import { Profile } from './pages/Profile';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { logout } from './store/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                BookShelf
              </Link>
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  <Library className="w-5 h-5 mr-1" />
                  Collection
                </Link>
                {user ? (
                  <>
                    <Link
                      to="/favorites"
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      <Heart className="w-5 h-5 mr-1" />
                      Favorites
                    </Link>
                    <Link
                      to="/add"
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      <PlusCircle className="w-5 h-5 mr-1" />
                      Add Book
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      <User className="w-5 h-5 mr-1" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      <LogOut className="w-5 h-5 mr-1" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm isEditing />} />
            <Route path="/login" element={<AuthForm isLogin />} />
            <Route path="/register" element={<AuthForm isLogin={false} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;