import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookByID } from '../redux/features/book/selectors';
import BookItem from '@components/BookItem/BookItem';

const BookPage: FC = () => {
  const { id } = useParams();
  const item = useSelector(selectBookByID(id));
  return item ? <BookItem id={id} volumeInfo={item?.volumeInfo} link={true} /> : <></>;
};

export default BookPage;
