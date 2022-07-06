import styles from './Error.module.scss';

const Error = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Error: {text}</div>
    </div>
  );
};

export default Error;
