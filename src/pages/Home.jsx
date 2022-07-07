import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorBooks } from '@redux/features/booksSlice';
import { fetchBooks } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem';
import styles from './Home.module.scss';
import Skeleton from '@components/BookItem/Skeleton';
import Error from '@components/Error';
import Button from '@components/Button';
import LoadMore from '@components/LoadMore';

const Home = () => {
  const { q, orderBy } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const skeletons = [...new Array(5)].map((_, ind) => <Skeleton key={ind} />);
  const {
    data: { items, totalItems },
    status,
    error,
  } = useSelector(selectorBooks);

  const onClickHandler = (e) => {
    dispatch(fetchBooks({ q, orderBy }));
  };
  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy }));
  }, []);
  if (error !== null) return <Error text={error} />;
  return (
    <div className="container">
      <div className={styles.totalItems}>
        {status !== 'pending' && <div>Found {totalItems} results</div>}
      </div>
      <div className={styles.content_items}>
        {status === 'pending' ? skeletons : items.map((el) => <BookItem key={el.etag} {...el} />)}
      </div>
      <LoadMore>
        <Button onClickHandler={onClickHandler} text="load more" />
      </LoadMore>
    </div>
  );
};

export default Home;
