import React from 'react';
import Header from './Header/Header';
import Cirlce from './Circle/Circle';
import Stripe from './Stripe/Stripe';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import Content from './Content/Content';
import Place from './Place/Place';
import Footer from '../Footer/Footer';
import styles from './Main.module.css';

const main = (props) => {
    let loader = null;
    let errorBox = null;
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
    if (props.error) errorBox = <ErrorBox closeErrorBox={props.closeErrorBox} />
    return (
        <div className={styles.Main}>
            <Header type="main" changeCity={props.changeCity} search={props.search} city={props.city} />
            <Cirlce pageOffset={props.pageOffset} />
            <Stripe pageOffset={props.pageOffset} />
            {loader}
            {errorBox}
            {content}
            <Footer />
        </div>
    )
}

export default main;