import { FC } from 'react';
import styles from './Error.module.scss';

type ErrorProps = {
  text: string;
};

const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Error: {text}</div>
    </div>
  );
};

export default Error;
