import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '@redux/features/booksSlice';
import { selectorBooks } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem';
import styles from './Home.module.scss';
import Skeleton from '@components/BookItem/Skeleton';

const Home = () => {
  const skeletons = [...new Array(5)].map((_, ind) => <Skeleton key={ind} />);
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
      <div className={styles.content_items}>
        {status === 'pending'
          ? skeletons
          : objects.items.map((el) => <BookItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Home;
