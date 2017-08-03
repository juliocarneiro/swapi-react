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
        <div key={i} className="list">
          <h1>{item.name}</h1>
          <p><span>Gender:</span> {item.gender}</p>
          <p><span>Birth year:</span> {item.birth_year}</p>
          <p><span>Height:</span> {item.height}</p>
          <p><span>Eye Color:</span> {item.eye_color}</p>
          <p><span>Hair Color:</span> {item.hair_color}</p>
          <p><span>Skin Color:</span> {item.skin_color}</p>
        </div>
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