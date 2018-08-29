import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/businessList/BusinessList.js';
import SearchBar from './components/searchBar/SearchBar.js';
import yelp from './util/Yelp.js';

const business = {};
const businesses = [];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);
  }
  searchYelp = (term,location,sortBy) => {
    yelp.search(term,location,sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} /> 
      </div>
    );
  }
}

export default App;
