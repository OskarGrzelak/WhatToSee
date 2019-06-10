import React from 'react';
import DetailsSection from './DetailsSection/DetailsSection';
import GallerySection from './GallerySection/GallerySection';
import Footer from '../Footer/Footer';
import styles from './PlaceDetails.module.css';

const placeDetails = (props) => {

    return (
        <div className={styles.Details}>
            <div className={styles.Close} onClick={props.hideDetails}>
                <i className="fas fa-times"></i>
            </div>
            <figure>
                <img src={props.data.main_media.media[0].url} alt={props.data.main_media.media[0].attribution.title} />
                <figcaption>
                    <h1>{props.data.name}</h1>
                </figcaption>
            </figure>
            <DetailsSection title="About" data={props.data.description.text} />
            <DetailsSection title="Opening hours" data={props.data.opening_hours} />
            <DetailsSection title="Admission" data={props.data.admission}/>
            <DetailsSection title="Contact" data={props.data} />
            <GallerySection photos={props.data.main_media.media} />
            <div className={styles.Navigation}>
                <button onClick={props.prev}>Previous</button>
                <button onClick={props.next}>Next</button>
            </div>
            <Footer />
        </div>
    );
}

export default placeDetails;