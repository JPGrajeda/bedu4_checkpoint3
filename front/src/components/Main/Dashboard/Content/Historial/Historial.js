import React, { Component } from 'react';
import TablaPagos  from './TablaPagos/TablaPagos';
import './Historial.css';
import ErrorBoundary  from './ErrorBoundary';
import  Futer from './Futer/Futer';

class Historial extends Component {

    constructor() {
        super();

        };

    

  
    render () {
        
        return (
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <ErrorBoundary>
                    <TablaPagos />
                    <Futer />
                </ErrorBoundary>           
            </div>
        )
    }
}
export default Historial;
