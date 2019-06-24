import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const card = (props) => (
    <figure className={styles.Card}>
        <img src={props.data.main_media.media[0].url} alt={props.data.main_media.media[0].attribution.title} />
        <figcaption>
            <p>
                {props.data.name}
                <span>
                    {props.data.perex}
                    <button onClick={(e) => props.setNewScrollPosition(0, 'places', e.target.parentNode.parentNode.parentNode.parentNode.parentNode)}><Link to={`/places/${props.data.id}`}>Read More</Link></button>
                </span>
            </p>
        </figcaption>
    </figure>
);

export default card;