import Input from '@components/Input';
import Select from '../Select';
import styles from './Header.module.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortBy = ['relevance', 'newest'];

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
