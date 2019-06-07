import React from 'react';
import styles from './GallerySection.module.css';

const gallerySection = (props) => {
    const images = props.photos.map(photo => {
        return (
            <figure key={photo.id} style={{width: `${100/props.photos.length}vw`, height: `${100/props.photos.length}vw`}}>
                <img src={photo.url} alt={photo.attribution.title} />
            </figure>
        )
    })
    return (
        <div className={styles.Gallery}>
            {images}
        </div>
    );
}

export default gallerySection;