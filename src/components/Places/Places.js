import React, { Component } from 'react';
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

        const places = this.props.data.map((place, index) => <Card data={place} showDetails={this.props.showDetails} key={index} />);

        return (
            <div className={styles.Places}>
                <Header type="places" city={this.props.city} />
                <div className={styles.Grid}>
                    {places}
                </div>
                <div className={styles.SearchBox}>
                    <input type="text" id="newSearch" placeholder="Do you want to check other city?" onChange={(e) => this.changeCityHandler(e)} />
                    <label for="newSearch">Do you want to check other city?</label>
                    <button onClick={() => this.props.newSearch(this.state.newCity)}><i className="fas fa-binoculars"></i></button>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Places;