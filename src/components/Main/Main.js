import React from 'react';
import Header from './Header/Header';
import styles from './Main.module.css';

const main = () => {
    return (
        <div className={styles.Main}>
            <Header />
            <div>content</div>
            <div>footer</div>
        </div>
    )
}

export default main;