import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Place from './Place/Place';
import Footer from '../Footer/Footer';
import styles from './Main.module.css';

const main = (props) => {
    return (
        <div className={styles.Main}>
            <Header type="main" changeCity={props.changeCity} city={props.city} />
            <Content>
                <Place id="1" showDetails={props.showDetails} />
                <Place id="2" />
                <Place id="3" />
                <Place id="4" />
                <button onClick={props.showPlaces}>See more places</button>
            </Content>
            <Footer />
        </div>
    )
}

export default main;