import React from 'react';
import image from '../../assets/images/TyhoBrahe.jpg';
import DetailsSection from './DetailsSection/DetailsSection';
import Footer from '../Footer/Footer';
import styles from './PlaceDetails.module.css';

const placeDetails = (props) => {

    return (
        <div className={styles.Details}>
            <div className={styles.Close} onClick={props.hideDetails}>
                <i className="fas fa-times"></i>
            </div>
            <figure>
                <img src={image} />
                <figcaption>
                    <h1>Grand Palais</h1>
                </figcaption>
            </figure>
            <DetailsSection />
            <DetailsSection />
            <DetailsSection />
            <DetailsSection />
            <div className={styles.Gallery}>
                <figure>
                    <img src={image} />
                </figure>
                <figure>
                    <img src={image} />
                </figure>
                <figure>
                    <img src={image} />
                </figure>
            </div>
            <div className={styles.Navigation}>
                <button>Previous</button>
                <button>Next</button>
            </div>
            <Footer />
        </div>
    );
}

export default placeDetails;