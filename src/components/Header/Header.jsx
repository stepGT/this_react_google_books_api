import { useDispatch } from 'react-redux';
import { setSearchValue } from '@redux/features/searchSlice';
import { fetchBooks } from '@redux/features/booksSlice';
import Input from '@components/Input';
import Select from '../Select';
import styles from './Header.module.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortBy = ['relevance', 'newest'];

const Header = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValue = e.currentTarget.elements[0].value;
    const searchValue = currentValue === '' ? 'all' : currentValue;
    dispatch(fetchBooks({ query: searchValue }));
    dispatch(setSearchValue(searchValue));
  };
  return (
    <div className={styles.header}>
      <div>Search for books</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input />
        <Select arrOptions={categories} label="Categories" />
        <Select arrOptions={sortBy} label="Sorting by" />
      </form>
    </div>
  );
};

export default Header;
