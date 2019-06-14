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
    data: null,
    scroll: false,
    scrollPosition: 0,
    oldScrollPosition: 0,
    loading: false
  }

  componentDidUpdate = () => {
    this.search();
    this.scroll();
  }

  search = () => {
    let cityId = null;
    let placesIds = null;
    if(this.state.search) {
      console.log('component did update')
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
        this.setState({ data: response.data.data.places, search: false, loading: false });
      })
      .catch(error => {
      console.log(error)
      });
    }
  }

  scroll = () => {
    if(this.state.scroll) {
      const position = this.state.scrollPosition;
      window.scrollTo(0, position);
      this.setState({scroll: false});
    }
  }

  changeCityHandler = (e) => {
    this.setState({city: e.target.value});
  }

  searchHandler = () => {
    this.setState({loading: true, search: true, scroll: true, scrollPosition: window.innerHeight})
  } 

  showDetailsHandler = (el, id) => {
    const rect = el.getBoundingClientRect();
    const position = el.offsetTop - rect.top;
    const index = this.state.data.findIndex(el => el.id === id);
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place, scroll: true, scrollPosition: 0, oldScrollPosition: position});
  }

  showPrevHandler = () => {
    const index = this.state.data.findIndex(el => el.id === this.state.currPlace.id) - 1;
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place, scroll: true, scrollPosition: 0});
  }

  showNextHandler = () => {
    const index = this.state.data.findIndex(el => el.id === this.state.currPlace.id) + 1;
    const place = this.state.data[index];
    this.setState({showDetails: true, currPlace: place, scroll: true, scrollPosition: 0});
  }

  hideDetailsHandler = () => {
    const position = this.state.oldScrollPosition;
    this.setState({showDetails: false, scroll: true, scrollPosition: position});
  }

  showPlacesHandler = () => {
    this.setState({showPlaces: true, scroll: true, scrollPosition: 0});
  }

  newSearchHandler = (city) => {
    this.setState({loading: true, city: city, showPlaces: false, search: true, scrollPosition: window.outerHeight});
  }

  render() {

    let page = <Main 
                  changeCity={this.changeCityHandler}
                  search={this.searchHandler}
                  loading={this.state.loading}
                  showDetails={this.showDetailsHandler}
                  showPlaces={this.showPlacesHandler}
                  city={this.state.city}
                  data={this.state.data} />
    if (this.state.showPlaces) page = <Places 
                                        city={this.state.city}
                                        data={this.state.data}
                                        showDetails={this.showDetailsHandler} 
                                        newSearch={this.newSearchHandler} />
    if (this.state.showDetails) page = <PlaceDetails
                                         hideDetails={this.hideDetailsHandler}
                                         data={this.state.currPlace}
                                         prev = {this.showPrevHandler}
                                         next = {this.showNextHandler} />

    return (
      <Fragment>
        {page}
      </Fragment>
    )
  }
}

export default App;
