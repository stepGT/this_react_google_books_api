import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorBooks } from '@redux/features/booksSlice';
import { fetchBooks } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem';
import styles from './Home.module.scss';
import Skeleton from '@components/BookItem/Skeleton';
import Error from '@components/Error';

const Home = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const skeletons = [...new Array(5)].map((_, ind) => <Skeleton key={ind} />);
  const {
    data: { items, totalItems },
    status,
    error,
  } = useSelector(selectorBooks);

  useEffect(() => {
    dispatch(fetchBooks({ query: searchValue }));
  }, []);
  if (error !== null) return <Error text={error} />;
  return (
    <div className="container">
      <div className={styles.totalItems}>
        {status !== 'pending' && <div>Found {totalItems} results</div>}
      </div>
      <div className={styles.content_items}>
        {status === 'pending' ? skeletons : items.map((el) => <BookItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Home;
