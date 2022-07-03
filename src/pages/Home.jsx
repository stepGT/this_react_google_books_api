import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '@redux/features/booksSlice';
import { selectorBooks } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem';

const Home = () => {
  const { objects, status } = useSelector(selectorBooks);
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const getBooks = async () => {
    dispatch(fetchBooks({ query:  searchValue }));
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="content__items">
        {status === 'pending'
          ? 'Loading'
          : objects.items.map((el) => <BookItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Home;
