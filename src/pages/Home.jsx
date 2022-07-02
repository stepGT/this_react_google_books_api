import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q="react"&startIndex=4&maxResults=5&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
      );
      return data;
    };
    getBooks();
  }, []);
  return (
    <div className="container">
      <div className="content">content</div>
    </div>
  );
};

export default Home;
