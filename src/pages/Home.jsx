import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '@redux/features/booksSlice';
import { selectorBooks } from '@redux/features/booksSlice';

const BookItem = ({ ...props }) => <div>{props.volumeInfo.title}</div>;

const Home = () => {
  const { objects, status } = useSelector(selectorBooks);
  const dispatch = useDispatch();
  const getBooks = async () => {
    dispatch(fetchBooks({ query: 'react' }));
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
