import React from'react';
import styles from './ErrorBox.module.css';

const errorBox = (props) => (
    <div className={styles.ErrorBox}>
        <h2>Oops! Something went wrong</h2>
        <p>Try again with other city?</p>
        <button onClick={props.closeErrorBox}>OK</button>
    </div>
);

export default errorBox;