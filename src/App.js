import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from '@pages/Home';
import BookPage from '@pages/BookPage';

const App = () => {
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
