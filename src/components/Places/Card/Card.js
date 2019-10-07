import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const card = (props) => (
    
    <div className={styles.Card}>
        <div>
            <h3>{props.data.name}</h3>
            <p>{props.data.perex}</p>
        </div>
        <Link to={`/places/${props.data.id}`} onClick={(e) => props.setNewScrollPosition(0, 'places', e.target.parentNode.parentNode)}>Read More</Link>
    </div>
);

export default card;