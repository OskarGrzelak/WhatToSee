import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import image from '../../../assets/images/no-avalible-image.png';

const card = (props) => (
    <figure className={styles.Card}>
        <img img src={props.data.main_media ? props.data.main_media.media[0].url : image} alt={props.data.main_media ? props.data.main_media.media[0].attribution.title : null} />
        <figcaption>
            <p>
                {props.data.name}
                <span>
                    {props.data.perex}
                    <Link to={`/places/${props.data.id}`} onClick={(e) => props.setNewScrollPosition(0, 'places', e.target.parentNode.parentNode.parentNode.parentNode.parentNode)}>Read More</Link>
                </span>
            </p>
        </figcaption>
    </figure>
);

export default card;