import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Places from './components/Places/Places';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.sygictravelapi.com/1.1/en';
axios.defaults.headers.common['x-api-key'] = 'Nx61vXYQ978Fa6NqhRkdg90yxq90VRSu1xO5xlfm';

class App extends Component {

  state = {
    city: '',
    search: false,
    data: null,
    scroll: false,
    scrollPosition: 0,
    oldScrollPosition: 0,
    loading: false,
    error: false,
    pageOffset: 0,
    redirectedFrom: '',
  }

  componentDidUpdate = () => {
    this.search();
    this.scroll();
  }

  search = () => {
    let cityId = null;
    let placesIds = null;
    if(this.state.search) {
      axios.get(`/places/list?limit=1&query=${this.state.city}`)
      .then(response => {
        cityId = response.data.data.places[0].id;
        return axios.get(`/places/list?parents=${cityId}&level=poi&limit=15`)
      })
      .then(response => {
        placesIds = response.data.data.places.map(place => place.id).reduce((prev, curr)=>{
          return prev + '%7C' + curr;
        });
        return axios.get(`/places?ids=${placesIds}`)
      })
      .then(response => {
        this.setState({ data: response.data.data.places, search: false, loading: false, scroll: true, scrollPosition: window.innerHeight });
      })
      .catch(error => {
        console.log(error)
        this.setState({error: true, loading: false, search: false});
      });
    }
  }

  scroll = () => {
    if(this.state.scroll) {
      let position = this.state.scrollPosition;
      window.scrollTo(0, position);
      this.setState({scroll: false});
    }
  }

  changeCityHandler = (e) => {
    this.setState({city: e.target.value});
  }

  searchHandler = () => {
    this.setState({loading: true, search: true})
  } 

  closeErrorBoxHandler = () => {
    this.setState({error: false, scroll: true, scrollPosition: 0})
  }

  setScrollPosition = (el) => {
    const rect = el.getBoundingClientRect();
    const position = el.offsetTop - rect.top;
    this.setState({scrollPosition: 0, oldScrollPosition: position});
  }

  newSearchHandler = (city) => {
    this.setState({loading: true, city: city, showPlaces: false, search: true});
  }

  saveOldScrollPosition = (el) => {
    const rect = el.getBoundingClientRect();
    return el.offsetTop - rect.top
  }

  setNewScrollPosition = (position, string, el) => {
    let oldPosition = el ? this.saveOldScrollPosition(el) : this.state.oldScrollPosition;
    let redirectedFrom = string ? string : this.state.redirectedFrom;
    this.setState({scrollPosition: position, oldScrollPosition: oldPosition, scroll: true, redirectedFrom: redirectedFrom});
  }

  stripeHandler = () => {
    window.addEventListener('scroll', ()=> {
      const pageOffset = window.pageYOffset;
      if (pageOffset !== this.state.pageOffset) {
        this.setState({pageOffset: pageOffset});
      }
    });
  }

  render() {

    this.stripeHandler();

    return (
      <Router basename="/WhatToSee">
        <Route exact path="/" render={() => <Main 
                  changeCity={this.changeCityHandler}
                  search={this.searchHandler}
                  loading={this.state.loading}
                  error={this.state.error}
                  closeErrorBox={this.closeErrorBoxHandler}
                  city={this.state.city}
                  data={this.state.data}
                  pageOffset={this.state.pageOffset}
                  setNewScrollPosition={this.setNewScrollPosition} />} />
        <Route exact path="/places" render={() => <Places city={this.state.city} 
                                                    data={this.state.data}
                                                    newSearch={this.newSearchHandler}
                                                    setNewScrollPosition={this.setNewScrollPosition} /> } />
        <Route path="/places/:placeId" render={({ match }) => <PlaceDetails
                                         data={this.state.data}
                                         redirectedFrom={this.state.redirectedFrom}
                                         position={this.state.oldScrollPosition}
                                         setNewScrollPosition={this.setNewScrollPosition}
                                         match={match} />} />
      </Router>
    )
  }
}

export default App;
