import ContentLoader from 'react-content-loader';
import styles from './BookItem.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <ContentLoader
          speed={2}
          width={254}
          height={284}
          viewBox="0 0 284 357"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="270" rx="2" ry="2" width="345" height="14" />
          <rect x="1" y="309" rx="2" ry="2" width="150" height="14" />
          <rect x="-43" y="29" rx="2" ry="2" width="373" height="188" />
          <rect x="0" y="230" rx="2" ry="2" width="156" height="16" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default Skeleton;
