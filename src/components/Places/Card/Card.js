import React from 'react';
import styles from './Card.module.css';

const card = (props) => (
    <figure className={styles.Card}>
        <img src={props.data.main_media.media[0].url} alt={props.data.main_media.media[0].attribution.title} />
        <figcaption>
            <p>
                {props.data.name}
                <span>
                    {props.data.perex}
                    <button onClick={() => props.showDetails(props.data.id)}>Read more</button>
                </span>
            </p>
        </figcaption>
    </figure>
);

export default card;