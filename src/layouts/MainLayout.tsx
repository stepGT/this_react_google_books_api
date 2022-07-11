import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import styles from '@scss/App.module.scss';

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
