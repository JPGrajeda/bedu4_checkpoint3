import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Main from "./components/Main/Main";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tarjetas: '',
			pagos: ''
		}
	}

	async componentDidMount() {
		let pagos = await axios.get('/api/pagos');
		let tarjetas = await axios.get('/api/tarjetas');
		this.setState({
			pagos,
			tarjetas
		})
	}

	render() {
		console.log(this.state.pagos);
		console.log(this.state.tarjetas);
		return (
			<Main>
				
			</Main>
		);
	}
}

export default App;

