import React from 'react';
import styles from '../../styles/Home.module.css';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          a
        </a>
      </footer>
    </>
  );
};
