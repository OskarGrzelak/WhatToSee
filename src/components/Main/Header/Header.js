import React from 'react';
import MonumentsIcons from '../../MonumentsIcons/MonumentsIcons';
import styles from './Header.module.css';

const header = () => {
    return (
        <div className={styles.Header}>
            <MonumentsIcons style={{transform: 'translateY(5px)'}} />
            <h1>The best places</h1>
            <h2>to see in <input type="text" /></h2>
            <button>Check it!</button>
        </div>
    )
}

export default header;