import React from 'react';
import './App.css';

import BusinessList from './components/businessList/BusinessList.js';
import SearchBar from './components/searchBar/SearchBar.js';

import yelp from './util/Yelp.js';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			businesses: []
		};
		
		this.searchYelp = this.searchYelp.bind(this);
	}
	
	searchYelp(term,location,sortBy) {
		yelp.search(term,location,sortBy).then( businesses => {
			this.setState({businesses: businesses});
		});
	}

	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar searchYelp={this.searchYelp} />
				<BusinessList businesses={this.state.businesses} /> 
			</div>
		);
	}
}

export default App;
