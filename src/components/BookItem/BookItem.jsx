import styles from './BookItem.module.scss';

const BookItem = ({ volumeInfo: { title, imageLinks, authors, categories } }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <img className={styles.image} src={imageLinks?.thumbnail} alt={title} />
        <div className={styles.categories}>{categories?.[0]}</div>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.authors}>{authors?.[0]}</h3>
      </div>
    </div>
  );
};

export default BookItem;
