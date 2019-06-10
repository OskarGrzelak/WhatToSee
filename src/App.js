import React, { Component, Fragment } from 'react';
import Main from './components/Main/Main';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Places from './components/Places/Places';
import axios from 'axios';

class App extends Component {

  state = {
    city: '',
    search: false,
    showDetails: false,
    showPlaces: false,
    data: null
  }

  componentDidUpdate = () => {
    let cityId = null;
    let placesIds = null;
    if(this.state.search) {
      if(!this.state.data) {
        axios.get(`https://api.sygictravelapi.com/1.1/en/places/list?limit=1&query=${this.state.city}`, { headers: { 'x-api-key': 'Nx61vXYQ978Fa6NqhRkdg90yxq90VRSu1xO5xlfm' } })
          .then(response => {
            cityId = response.data.data.places[0].id;
            return axios.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=${cityId}&level=poi&limit=5`, { headers: { 'x-api-key': 'Nx61vXYQ978Fa6NqhRkdg90yxq90VRSu1xO5xlfm' } })
          })
          .then(response => {
            placesIds = response.data.data.places.map(place => place.id).reduce((prev, curr)=>{
              return prev + '%7C' + curr;
            });
            const url = `https://api.sygictravelapi.com/1.1/en/places?ids=${placesIds}`;
            return axios.get(url, { headers: { 'x-api-key': 'Nx61vXYQ978Fa6NqhRkdg90yxq90VRSu1xO5xlfm' } })
          })
          .then(response => {
            this.setState({ data: response.data.data.places });
          })
          .catch(error => {
          console.log(error)
          });
      }
    }
  }

  changeCityHandler = (e) => {
    this.setState({city: e.target.value});
  }

  searchHandler = () => {
    this.setState({search: true})
  } 

  showDetailsHandler = (id) => {
    const index = this.state.data.findIndex(el => el.id === id);
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place, showPlaces: false});
  }

  showPrevHandler = () => {
    const index = this.state.data.findIndex(el => el.id === this.state.currPlace.id) - 1;
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place});
  }

  showNextHandler = () => {
    const index = this.state.data.findIndex(el => el.id === this.state.currPlace.id) + 1;
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place});
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
                  search={this.searchHandler}
                  showDetails={this.showDetailsHandler}
                  showPlaces={this.showPlacesHandler}
                  city={this.state.city}
                  data={this.state.data} />
    if (this.state.showDetails) page = <PlaceDetails
                                         hideDetails={this.hideDetailsHandler}
                                         data={this.state.currPlace}
                                         prev = {this.showPrevHandler}
                                         next = {this.showNextHandler} />
    if (this.state.showPlaces) page = <Places 
                                        city={this.state.city}
                                        data={this.state.data}
                                        showDetails={this.showDetailsHandler} 
                                        newSearch={this.newSearchHandler} />

    return (
      <Fragment>
        {page}
      </Fragment>
    )
  }
}

export default App;
