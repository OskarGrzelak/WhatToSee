import React from 'react';
import styles from './MonumentsIcons.module.css';

const monumentsIcons = (props) => {

    let style = [styles.Icons];
    if (props.type === 'header') {
        style.push(styles.IconsHeader);
    }else if (props.type === 'footer') {
        style.push(styles.IconsFooter);
    };

    return (
        <div className={style.join(' ')}>
            <i className="fas fa-torii-gate"></i>
            <i className="fas fa-landmark"></i>
            <i className="fas fa-monument"></i>
            <i className="fas fa-place-of-worship"></i>
            <i className="fas fa-archway"></i>
        </div>
    )
};

export default monumentsIcons;