import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import Main from "./components/Main/Main";
import Historial from "./components/Main/Dashboard/Content/Historial/Historial";
import ErrorBoundary from './components/Main/Dashboard/Content/Historial/HistorialElementos/ErrroBoundary';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pagos: ''
		}
	}

	async componentDidMount() {
		let pagos = await axios.get('/api/pagos');
		this.setState({
			pagos
		})
	}

	render() {
		console.log(this.state.pagos);
		return (
			<ErrorBoundary>
			<Historial></Historial>
			
			</ErrorBoundary>
			// <Main>
				
			// </Main>
		);
	}
}

export default App;
