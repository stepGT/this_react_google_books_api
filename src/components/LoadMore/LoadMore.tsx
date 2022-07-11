import { FC, ReactNode } from 'react';
import styles from './LoadMore.module.scss';

type LoadMoreProps = {
  children: ReactNode;
};

const LoadMore: FC<LoadMoreProps> = ({ children }) => {
  return <div className={styles.load_more}>{children}</div>;
};

export default LoadMore;
