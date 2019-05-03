import React from 'react';
import styles from './MonumentsIcons.module.css';

const monumentsIcons = (props) => (
    <div className={styles.Icons} style={props.style}>
        <i className="fas fa-torii-gate"></i>
        <i className="fas fa-landmark"></i>
        <i className="fas fa-monument"></i>
        <i className="fas fa-place-of-worship"></i>
        <i className="fas fa-archway"></i>
    </div>
);

export default monumentsIcons;