import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Button from '@components/Button';
import styles from './BookItem.module.scss';

type BookItemProps = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    authors: string[];
    categories: string[];
  };
  link: string;
  isPage: boolean;
};

const BookItem: FC<BookItemProps> = ({
  id,
  volumeInfo: { title, imageLinks, authors, categories },
  link,
}) => {
  let className = classnames(styles.wrapper, { [styles.isPage]: link });
  const thumbnail = imageLinks?.thumbnail
    ? imageLinks?.thumbnail
    : 'https://dummyimage.com/128x200/ccc/000';
  return (
    <div className={className}>
      <div className={styles.block}>
        <div className={styles.image}>
          {!link ? (
            <Link to={`book/${id}`}>
              <img src={thumbnail} alt={title} />
            </Link>
          ) : (
            <img src={thumbnail} alt={title} />
          )}
        </div>
        <div className={styles.categories}>{categories?.[0]}</div>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.authors}>{authors?.join(', ')}</h3>
        <div className={styles.link}>
          {link && (
            <Link to="/">
              <Button text="Назад" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
