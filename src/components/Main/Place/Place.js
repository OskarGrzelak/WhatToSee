import React from 'react';
import image from '../../../assets/images/TyhoBrahe.jpg';
import styles from './Place.module.css';

const place = (props) => {
    let placeCard = (
        <div className={styles.Place}>
            <div className={styles.ImageContainer}>
                <img src={image} />
            </div>
            <div className={styles.DataContainer}>
                <h3>Tyho Brahe Planetarium</h3>
                <p>Transom skysail lugsail lee Blimey me walk the plank maroon Jack Ketch lass. Blimey hail-shot clipper cog booty belaying pin parley barque walk the plank sloop. Blow the man down sloop holystone Arr hearties bilged on her anchor gibbet long boat splice the main brace rigging.</p>
                <button>Read More</button>
            </div>
        </div>
    );
    if (parseInt(props.id) % 2 === 0) {
        placeCard = (
            <div className={styles.Place}>
                <div className={styles.DataContainer}>
                    <h3>Tyho Brahe Planetarium</h3>
                    <p>Transom skysail lugsail lee Blimey me walk the plank maroon Jack Ketch lass. Blimey hail-shot clipper cog booty belaying pin parley barque walk the plank sloop. Blow the man down sloop holystone Arr hearties bilged on her anchor gibbet long boat splice the main brace rigging.</p>
                    <button>Read More</button>
                </div>
                <div className={styles.ImageContainer}>
                    <img src={image} />
                </div>
            </div>
        );
    }
    return placeCard;
};

export default place;