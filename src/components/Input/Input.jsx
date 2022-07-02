import { useState } from 'react';
import styles from './Input.module.scss';

const Input = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={styles.input}>
      <label htmlFor="inputValue"></label>
      <input id="inputValue" type="text" value={value} onChange={(e) => handleChange(e)} />
      <input type="submit" value="Submit" />
    </div>
  );
};

export default Input;
