import React from 'react';
import image from '../../../assets/images/TyhoBrahe.jpg';
import styles from './Card.module.css';

const card = () => (
    <figure className={styles.Card}>
        <img src={image} />
        <figcaption>
            <p>
                Tyho Brahe Planetarium
                <span>
                    Transom skysail lugsail lee Blimey me walk the plank maroon Jack Ketch lass. Blimey hail-shot clipper cog booty belaying pin parley barque walk the plank sloop.
                </span>
            </p>
        </figcaption>
    </figure>
);

export default card;