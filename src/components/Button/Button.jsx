import styles from './Button.module.scss';

const Button = ({ text, disabled = false, onClickHandler }) => {
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
