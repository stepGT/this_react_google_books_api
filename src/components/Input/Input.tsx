import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQ } from '@redux/features/searchSlice';
import styles from './Input.module.scss';

const Input: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(setQ(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="inputValue"></label>
      <input
        className={styles.input}
        id="inputValue"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input className={styles.submit} type="submit" value="" />
    </div>
  );
};

export default Input;
