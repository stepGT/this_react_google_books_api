import { useState } from 'react';
import styles from './Select.module.scss';

const Select = ({ label = 'Categories', arrOptions = ['', '', ''] }) => {
  const [selectValue, setSelectValue] = useState('');
  const changeSelect = (e) => setSelectValue(e.target.value);
  const options = arrOptions.map((el, ind) => {
    return (
      <option key={ind} value={ind}>
        {el}
      </option>
    );
  });
  return (
    <div className={styles.select}>
      <label htmlFor="select">{label}</label>
      <select id="select" value={selectValue} onChange={changeSelect}>
        {options}
      </select>
    </div>
  );
};

export default Select;
