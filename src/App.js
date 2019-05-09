import React, { Component, Fragment } from 'react';
import Main from './components/Main/Main';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Places from './components/Places/Places';

class App extends Component {

  state = {
    city: '',
    showDetails: false,
    showPlaces: false
  }

  changeCityHandler = (e) => {
    this.setState({city: e.target.value});
  }

  showDetailsHandler = () => {
    this.setState({showDetails: true});
  }

  hideDetailsHandler = () => {
    this.setState({showDetails: false});
  }

  showPlacesHandler = () => {
    this.setState({showPlaces: true});
  }

  newSearchHandler = (city) => {
    this.setState({city: city, showPlaces: false});
  }

  render() {

    let page = <Main 
                  changeCity={this.changeCityHandler}
                  showDetails={this.showDetailsHandler}
                  showPlaces={this.showPlacesHandler}
                  city={this.state.city} />
    if (this.state.showDetails) page = <PlaceDetails hideDetails={this.hideDetailsHandler} />
    if (this.state.showPlaces) page = <Places city={this.state.city} newSearch={this.newSearchHandler} />

    return (
      <Fragment>
        {page}
      </Fragment>
    )
  }
}

export default App;
