import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@redux/features/searchSlice';
import styles from './Input.module.scss';

const Input = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(setSearchValue(e.target.value));
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
