import React from 'react';
import styles from './DetailsSection.module.css';

const detailsSection = (props) => {
    let body = null;
    let title = null;
    let phone = null;
    let email = null;
    let address = null;
    let section = null;
    if (props.title !== "Contact") {
        if (props.data) {
            title = <h2>{props.title}</h2>
            body = props.data.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
        }
    } else {
        if (props.data.phone) phone = <p>Phone: {props.data.phone}</p>;
        if (props.data.email) email = <p>E-mail: {props.data.email}</p>;
        if (props.data.address) address = <p>Address: {props.data.address}</p>;
        if (phone || email || address) {
            title = <h2>Contact</h2>
            body = <div>
                {phone}
                {email}
                {address}
            </div>
        }
    }
    if (title) section = <div className={styles.Section}>{title}{body}</div>


    return section;
};

export default detailsSection;