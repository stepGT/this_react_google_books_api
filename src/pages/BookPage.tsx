import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookByID } from '@redux/features/booksSlice';
import { selectorBookByID } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem/BookItem';
import Error from '@components/Error';

const BookPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: { volumeInfo },
    status,
    error,
  } = useSelector(selectorBookByID);
  useEffect(() => {
    dispatch(fetchBookByID({ id }));
  }, []);
  if (error !== null) return <Error text={error} />;
  return status === 'fulfilled' && <BookItem id={id} volumeInfo={volumeInfo} link={true} />;
};

export default BookPage;
