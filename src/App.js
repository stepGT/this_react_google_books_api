import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import '@scss/App.module.scss';

const App = () => {
  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get(
        `${
          process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1
        }?q=${'biography'}&startIndex=0&maxResults=5&filter=ebooks&key=${
          process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
        }`,
      );
      return data;
    };
    getBooks();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/book/:id" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
