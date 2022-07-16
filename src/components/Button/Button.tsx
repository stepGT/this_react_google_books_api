import { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClickHandler: () => void;
};

const Button: FC<ButtonProps> = ({ text, disabled = false, onClickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={onClickHandler}
        name=""
        disabled={disabled}
        type="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
