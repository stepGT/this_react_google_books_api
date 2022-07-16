import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
// book features
import { fetchBooks } from '../redux/features/book/asyncActions';
import { loadMoreSlice } from '../redux/features/book/slice';
import { selectBooks } from '../redux/features/book/selectors';
import { selectSearch } from '../redux/features/search/selectors';
import { EStatusBook } from '../redux/features/book/types';
// search features
import { setStartIndex } from '../redux/features/search/slice';
// components
import BookItem from '@components/BookItem';
import Skeleton from '@components/BookItem/Skeleton';
import Error from '@components/Error';
import Button from '@components/Button';
import LoadMore from '@components/LoadMore';
// api
import { fetchBooksLoadMore } from '../api/BooksService';
// style
import styles from './Home.module.scss';

const Home: FC = () => {
  const { q, orderBy, startIndex, maxResults } = useSelector(selectSearch);
  const dispatch = useAppDispatch();
  const skeletons = [...new Array(maxResults)].map((_, ind) => <Skeleton key={ind} />);
  const { items, status, error } = useSelector(selectBooks);

  const onClickHandler = () => {
    dispatch(setStartIndex(startIndex));
    fetchBooksLoadMore(q, orderBy, startIndex + 1, maxResults).then((e) =>
      dispatch(loadMoreSlice(e.items)),
    );
  };
  useEffect(() => {
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults }));
  }, []);
  if (error !== null) return <Error text={error} />;
  return (
    <div className="container">
      <div className={styles.totalItems}>
        {status !== EStatusBook.PENDING && <div>Found {1} results</div>}
      </div>
      <div className={styles.content_items}>
        {status === EStatusBook.PENDING
          ? skeletons
          : items.map((el) => <BookItem key={el.etag} {...el} />)}
      </div>
      <LoadMore>
        <Button onClickHandler={onClickHandler} text="load more" />
      </LoadMore>
    </div>
  );
};

export default Home;
