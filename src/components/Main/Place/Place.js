import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Place.module.css';
import image from '../../../assets/images/no-avalible-image.png';

const place = (props) => {
    let placeCard = (
        <div className={styles.Place}>
            <div className={styles.ImageContainer}>
                <img src={props.data.main_media ? props.data.main_media.media[0].url : image} alt={props.data.main_media ? props.data.main_media.media[0].attribution.title : null} />
            </div>
            <div className={styles.DataContainer}>
                <h3>{props.data.name}</h3>
                <p>{props.data.perex}</p>
                <Link to={`/places/${props.data.id}`} onClick={(e) => props.setNewScrollPosition(0, 'main', e.target)}>Read More</Link>
            </div>
        </div>
    );
    if (parseInt(props.id) % 2 === 0) {
        placeCard = (
            <div className={styles.Place}>
                <div className={styles.DataContainer}>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.perex}</p>
                    <Link to={`/places/${props.data.id}`} onClick={(e) => props.setNewScrollPosition(0, 'main', e.target)}>Read More</Link>
                </div>
                <div className={styles.ImageContainer}>
                    <img src={props.data.main_media ? props.data.main_media.media[0].url : image} alt={props.data.main_media ? props.data.main_media.media[0].attribution.title : null} />
                </div>
            </div>
        );
    }
    return placeCard;
};

export default place;