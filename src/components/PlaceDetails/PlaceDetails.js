import React from 'react';
import { Link } from 'react-router-dom';
import DetailsSection from './DetailsSection/DetailsSection';
import GallerySection from './GallerySection/GallerySection';
import Footer from '../Footer/Footer';
import styles from './PlaceDetails.module.css';

const placeDetails = (props) => {
    const index = props.data.findIndex(el => el.id === props.match.params.placeId);
    const data = props.data[index];
    let link = <Link to="/" onClick={() => props.setNewScrollPosition(props.position)}><i className="fas fa-times"></i></Link>;
    if (props.redirectedFrom === 'places') link = <Link to="/places" onClick={() => props.setNewScrollPosition(props.position)}><i className="fas fa-times"></i></Link>;
    return (
        <div className={styles.Details}>
            <div className={styles.Close}>
                {link}
            </div>
            <figure>
                <img img src={data.main_media ? data.main_media.media[0].url : null} alt={data.main_media ? data.main_media.media[0].attribution.title : null} />
                <figcaption>
                    <h1>{data.name}</h1>
                </figcaption>
            </figure>
            <DetailsSection title="About" data={data.description ? data.description.text : null} />
            <DetailsSection title="Opening hours" data={data.opening_hours} />
            <DetailsSection title="Admission" data={data.admission}/>
            <DetailsSection title="Contact" data={data} />
            {data.main_media ? <GallerySection photos={data.main_media.media} /> : null}
            <div className={styles.Navigation}>
                <Link to={`/places/${index-1 >= 0 ? props.data[index-1].id : props.data[props.data.length-1].id}`} onClick={() => props.setNewScrollPosition(0)}>Previous</Link>
                <Link to={`/places/${index+1 < props.data.length ? props.data[index+1].id : props.data[0].id}`} onClick={() => props.setNewScrollPosition(0)}>Next</Link>
            </div>
            <Footer />
        </div>
    );
}

export default placeDetails;