import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Main from "./components/Main/Main";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			algo: ''
		}
	}

	async componentDidMount() {
		let algo = await axios.get('/api/tarjetas');
		console.log(algo);
	}

	render() {
		console.log(this.state.algo);
		return (
			<Main>
				
			</Main>
		);
	}
}

export default App;
