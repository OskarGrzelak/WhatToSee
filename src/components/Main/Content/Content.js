import React from 'react';
import styles from './Content.module.css';

const content = (props) => (
    <div className={styles.Content}>
        {props.children}
    </div>
)

export default content;