import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from '@pages/Home';
import BookPage from '@pages/BookPage';
import { fetchBooks } from '@redux/features/booksSlice';

const App = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const getBooks = async () => {
    dispatch(fetchBooks({ query:  searchValue }));
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<BookPage />} />
      </Route>
    </Routes>
  );
};

export default App;
