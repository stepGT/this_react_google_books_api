import { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import styles from './Select.module.scss';

type SelectProps = {
  label: string;
  arrOptions: string[];
  handleFilter: (e: string) => void;
}

const Select: FC<SelectProps> = ({ label, arrOptions = [], handleFilter }) => {
  const [selectValue, setSelectValue] = useState('');
  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    handleFilter(e.target.value);
  };
  const options = arrOptions.map((el, ind) => {
    return (
      <option key={ind} value={el}>
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
