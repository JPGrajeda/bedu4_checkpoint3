import React, { Component } from 'react';
import TablaPagos  from './TablaPagos/TablaPagos';
import './Historial.css';
import ErrorBoundary  from './ErrorBoundary';
import  Futer from './Futer/Futer';

class Historial extends Component {

    constructor() {
        super();

        this.state ={startDate:""};
        this.state ={pago:""};
    }

    handleStartDateChange = event => {
        this.setState ({
            startDate: event.target.value,
        });
    };


    render () {
        const { startDate } = this.state;
        return (
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <ErrorBoundary>
                    <TablaPagos  startDate={startDate} OnStartDateChange={this.handleStartDateChange}></TablaPagos>
                    <Futer startDate={startDate}/>
                </ErrorBoundary>           
            </div>
        )
    }
}
export default Historial;
