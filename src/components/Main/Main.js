import React from 'react';
import Header from './Header/Header';
import Loader from '../Loader/Loader';
import Content from './Content/Content';
import Place from './Place/Place';
import Footer from '../Footer/Footer';
import styles from './Main.module.css';

const main = (props) => {
    let loader = null;
    let content = null;
    let placesList = null;
    if (props.loading) loader = <Loader />;
    if (props.data && !props.loading) {
        placesList = props.data.map((place, index) => <Place data={place} showDetails={props.showDetails} key={index} id={index} />);
        content = (
            <Content>
                {placesList}
                <button onClick={props.showPlaces}>See more places</button>
            </Content>
        )
    }
    return (
        <div className={styles.Main}>
            <Header type="main" changeCity={props.changeCity} search={props.search} city={props.city} />
            {loader}
            {content}
            <Footer />
        </div>
    )
}

export default main;