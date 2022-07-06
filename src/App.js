import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from '@pages/Home';
import BookPage from '@pages/BookPage';
import NotFound from '@components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="book/:id" element={<BookPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
