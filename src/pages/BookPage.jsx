import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookByID } from '@redux/features/booksSlice';
import { selectorBookByID } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem/BookItem';

const BookPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const object = useSelector(selectorBookByID);
  const getBooks = async () => dispatch(fetchBookByID({ id }));
  useEffect(() => {
    try {
      getBooks();
    } catch (error) {
      alert('Ошибка при получении книги!');
    }
  }, []);

  return object.status === 'fulfilled' && <BookItem id={id} volumeInfo={object.item.volumeInfo} link={true} />;
};

export default BookPage;
