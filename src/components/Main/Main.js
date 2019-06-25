import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
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
        placesList = props.data.slice(0, 5).map((place, index) => <Place data={place} setNewScrollPosition={props.setNewScrollPosition} key={index} id={index} />);
        content = (
            <Content>
                {placesList}
                <Link to="/places" onClick={() => props.setNewScrollPosition(0)}>See more places</Link>
            </Content>
        )
    }
    if (props.error) errorBox = <ErrorBox closeErrorBox={props.closeErrorBox} />
    return (
        <div className={styles.Main}>
            <Header type="main" changeCity={props.changeCity} search={props.search} city={props.city} />
            <Stripe pageOffset={props.pageOffset} />
            {loader}
            {errorBox}
            {content}
            <Footer />
        </div>
    )
}

export default main;