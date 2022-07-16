import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQ, setOrderBy } from '../../redux/features/search/slice';
import { fetchBooks } from '../../redux/features/book/asyncActions';
import Input from '@components/Input';
import Select from '@components/Select';
import styles from './Header.module.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortBy = ['relevance', 'newest'];

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { q, orderBy, startIndex, maxResults } = useSelector((state) => state.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValue = e.currentTarget.elements[0].value;
    const searchValue = currentValue === '' ? 'all' : currentValue;
    dispatch(fetchBooks({ q: searchValue, orderBy, startIndex, maxResults }));
    dispatch(setQ(searchValue));
    navigate('/');
  };
  const handleSortBy = (e) => {
    dispatch(setOrderBy(e));
    dispatch(fetchBooks({ q, orderBy: e, startIndex, maxResults }));
    navigate('/');
  };
  const handleCategories = (e) => {
    const q = e.includes('all') ? e : 'subject:' + e;
    dispatch(setQ(q));
    dispatch(fetchBooks({ q, orderBy, startIndex, maxResults }));
    navigate('/');
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
