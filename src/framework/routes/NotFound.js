import React from 'react';
import styles from './NotFound.css';

const NotFound = () =>
  <div className={styles.normal}>
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.desc}>未找到该页面</p>
      <a href="/">返回首页</a>
    </div>
  </div>;

export default NotFound;
