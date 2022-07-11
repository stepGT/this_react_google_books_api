import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectorBooks, loadMore } from '@redux/features/booksSlice';
import { setParams } from '@redux/features/searchSlice';
import BookItem from '@components/BookItem';
import styles from './Home.module.scss';
import Skeleton from '@components/BookItem/Skeleton';
import Error from '@components/Error';
import Button from '@components/Button';
import LoadMore from '@components/LoadMore';
import { fetchBooksLoadMore } from '@api/BooksService';

const Home: FC = () => {
  const { q, orderBy, startIndex, maxResults } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const skeletons = [...new Array(maxResults)].map((_, ind) => <Skeleton key={ind} />);
  const {
    data: { items, totalItems },
    status,
    error,
  } = useSelector(selectorBooks);

  const onClickHandler = () => {
    dispatch(setParams({ startIndex, maxResults }));
    fetchBooksLoadMore(q, orderBy, startIndex + 1, maxResults).then((e) =>
      dispatch(loadMore(e.items)),
    );
  };
  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults }));
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
