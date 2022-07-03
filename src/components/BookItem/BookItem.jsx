import styles from './BookItem.module.scss';

const BookItem = ({ volumeInfo: { title, imageLinks, authors, categories } }) => {
  return (
    <div style={styles}>
      <div>
        <img src={imageLinks.thumbnail} alt="" />
      </div>
      <div>{categories && categories[0]}</div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h5>{authors && authors[0]}</h5>
      </div>
    </div>
  );
};

export default BookItem;
