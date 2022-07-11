import { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>Данная страница отсутствует!</p>
    </div>
  );
};

export default NotFound;
