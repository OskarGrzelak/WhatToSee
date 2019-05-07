import React from 'react';
import MonumentsIcons from '../MonumentsIcons/MonumentsIcons';
import styles from './Footer.module.css';

const footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.Footer__main}>
            <h1>The best places</h1>
            <div className={styles.Footer__sub}>
                <h2>to see</h2>
                <MonumentsIcons style={{color: '#FFFFFF', fontSize: '4rem'}} />
            </div>
        </div>
        <div className={styles.Footer__circle}>
            <p>Powered by Sygic Travel API</p>
            <p>Copy 2019 by Oskar Grzelak</p>
        </div>
    </footer>
);

export default footer;