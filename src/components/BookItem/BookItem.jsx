import { Link } from 'react-router-dom';
import styles from './BookItem.module.scss';

const BookItem = ({ id, volumeInfo: { title, imageLinks, authors, categories }, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.image}>
          <Link to={`${id}`}>
            <img src={imageLinks?.thumbnail} alt={title} />
          </Link>
        </div>
        <div className={styles.categories}>{categories?.[0]}</div>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.authors}>{authors?.[0]}</h3>
        <div className={styles.link}>
          {link && (
            <Link to="/">
              <button className={styles.button}>
                <span>Назад</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
