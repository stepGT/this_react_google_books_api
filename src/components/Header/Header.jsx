import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQ, setOrderBy } from '@redux/features/searchSlice';
import { fetchBooks } from '@redux/features/booksSlice';
import Input from '@components/Input';
import Select from '@components/Select';
import styles from './Header.module.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortBy = ['relevance', 'newest'];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { q, orderBy } = useSelector((state) => state.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValue = e.currentTarget.elements[0].value;
    const searchValue = currentValue === '' ? 'all' : currentValue;
    dispatch(fetchBooks({ q: searchValue, orderBy: e.currentTarget.elements[3].value }));
    dispatch(setQ(searchValue));
    navigate('/');
  };
  const handleSortBy = (e) => {
    dispatch(setOrderBy(e));
    dispatch(fetchBooks({ q, orderBy: e }));
  };
  const handleCategories = (e) => {
    dispatch(setQ('subject:' + e));
    dispatch(fetchBooks({ q: 'subject:' + e, orderBy }));
  };
  return (
    <div className={styles.header}>
      <div className={styles.search_text}>Search for books</div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form_input}>
          <Input />
        </div>
        <div className={styles.form_select}>
          <Select handleFilter={handleCategories} arrOptions={categories} label="Categories" />
          <Select handleFilter={handleSortBy} arrOptions={sortBy} label="Sorting by" />
        </div>
      </form>
    </div>
  );
};

export default Header;
