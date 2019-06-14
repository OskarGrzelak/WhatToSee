import React from 'react';
import styles from './Place.module.css';

const place = (props) => {
    let placeCard = (
        <div className={styles.Place}>
            <div className={styles.ImageContainer}>
                <img src={props.data.main_media.media[0].url} alt={props.data.main_media.media[0].attribution.title} />
            </div>
            <div className={styles.DataContainer}>
                <h3>{props.data.name}</h3>
                <p>{props.data.perex}</p>
                <button onClick={(e) => props.showDetails(e.target, props.data.id)}>Read More</button>
            </div>
        </div>
    );
    if (parseInt(props.id) % 2 === 0) {
        placeCard = (
            <div className={styles.Place}>
                <div className={styles.DataContainer}>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.perex}</p>
                    <button onClick={(e) => props.showDetails(e.target, props.data.id)}>Read More</button>
                </div>
                <div className={styles.ImageContainer}>
                    <img src={props.data.main_media.media[0].url} alt={props.data.main_media.media[0].attribution.title} />
                </div>
            </div>
        );
    }
    return placeCard;
};

export default place;