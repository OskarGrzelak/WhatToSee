import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Main/Header/Header';
import Footer from '../Footer/Footer';
import Card from './Card/Card';
import styles from './Places.module.css';

class Places extends Component {

    state = {newCity: ''};

    changeCityHandler = (e) => {
        this.setState({newCity: e.target.value});
    }

    render() {

        const places = this.props.data.map((place, index) => <Card data={place} setNewScrollPosition={this.props.setNewScrollPosition} key={index} />);

        return (
            <div className={styles.Places}>
                <Header type="places" city={this.props.city} />
                <div className={styles.Grid}>
                    {places}
                </div>
                <div className={styles.SearchBox}>
                    <input type="text" id="newSearch" placeholder="Do you want to check other city?" onChange={(e) => this.changeCityHandler(e)} />
                    <label htmlFor="newSearch">Do you want to check other city?</label>
                    <button><Link to="/" onClick={() => this.props.newSearch(this.state.newCity)}><i className="fas fa-binoculars"></i></Link></button>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Places;