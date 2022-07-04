import { selectorBooks } from '@redux/features/booksSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookItem from '@components/BookItem/BookItem';

const BookPage = () => {
  const { id } = useParams();
  const {
    objects: { items },
  } = useSelector(selectorBooks);
  
  const book = items?.filter((el) => el.id === id);
  if (!book) return <>Загрузка...</>;
  return <BookItem id={id} volumeInfo={book[0].volumeInfo} link={true} />;
};

export default BookPage;
