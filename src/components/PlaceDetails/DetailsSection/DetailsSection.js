import React from 'react';
import styles from './DetailsSection.module.css';

const detailsSection = (props) => {
    let body = null;
    if (props.title !== "Contact") {
        const data = props.data.split('\n\n');
        body = data.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    } else {
        body = <div>
            <p>Phone: {props.data.phone}</p>
            <p>E-mail: {props.data.email}</p>
            <p>Address: {props.data.address}</p>
        </div>
    }

    return (
        <div className={styles.Section}>
            <h2>{props.title}</h2>
            {body}
        </div>
    );
};

export default detailsSection;