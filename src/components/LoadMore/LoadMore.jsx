import styles from './LoadMore.module.scss';

const LoadMore = ({ children }) => {
  return <div className={styles.load_more}>{children}</div>;
};

export default LoadMore;
