import { useSelector } from 'react-redux';
import { selectorBooks } from '@redux/features/booksSlice';
import BookItem from '@components/BookItem';
import styles from './Home.module.scss';
import Skeleton from '@components/BookItem/Skeleton';

const Home = () => {
  const skeletons = [...new Array(5)].map((_, ind) => <Skeleton key={ind} />);
  const { objects, status } = useSelector(selectorBooks);

  return (
    <div className="container">
      <div className={styles.totalItems}>
        {status !== 'pending' && <div>Found {objects.totalItems} results</div>}
      </div>
      <div className={styles.content_items}>
        {status === 'pending'
          ? skeletons
          : objects.items.map((el) => <BookItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Home;
