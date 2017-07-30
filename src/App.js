import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    const self = this;
    axios.get('http://swapi.co/api/people/').then(response => {
      console.log('Success: ', response.data.results);
      self.setState({items: response.data.results});
    }).catch(function (error) {
        console.log('Error: ', error);
    })
  }

  render() {
    const renderItems = this.state.items.map(function(item, i) {
      return(
        <li key={i}><span>Name:</span> {item.name} / <span>Gender:</span> {item.gender} / <span>Birth year:</span> {item.birth_year} / <span>Height:</span> {item.height}</li>
      )
    });

    return (
      <ul>
        {renderItems}
      </ul>
    );
  }

}

export default App;