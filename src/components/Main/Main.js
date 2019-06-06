import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Place from './Place/Place';
import Footer from '../Footer/Footer';
import styles from './Main.module.css';

const main = (props) => {
    let placesList = null;
    if (props.data) {
        placesList = props.data.map((place, index) => <Place data={place} showDetails={props.showDetails} key={index} id={index} />)
    }
    return (
        <div className={styles.Main}>
            <Header type="main" changeCity={props.changeCity} search={props.search} city={props.city} />
            <Content>
                {placesList}
                {/* <Place id="1" showDetails={props.showDetails} />
                <Place id="2" />
                <Place id="3" />
                <Place id="4" /> */}
                <button onClick={props.showPlaces}>See more places</button>
            </Content>
            <Footer />
        </div>
    )
}

export default main;