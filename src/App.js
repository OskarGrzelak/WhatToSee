import React, { Component, Fragment } from 'react';
import Main from './components/Main/Main';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

class App extends Component {

  state = {
    showDetails: false
  }

  showDetailsHandler = () => {
    this.setState({showDetails: true});
  }

  hideDetailsHandler = () => {
    this.setState({showDetails: false});
  }

  render() {

    let page = <Main showDetails={this.showDetailsHandler} />
    if (this.state.showDetails) page = <PlaceDetails hideDetails={this.hideDetailsHandler} />

    return (
      <Fragment>
        {page}
      </Fragment>
    )
  }
}

export default App;
