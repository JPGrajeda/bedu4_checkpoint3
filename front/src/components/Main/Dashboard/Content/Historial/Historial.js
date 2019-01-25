import React, { Component } from 'react';
import TablaPagos  from './TablaPagos/TablaPagos';
import './Historial.css';
import ErrorBoundary  from './ErrorBoundary';

class Historial extends Component {

    render () {
        return (
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <ErrorBoundary>
                    <TablaPagos></TablaPagos> 
                </ErrorBoundary>           
            </div>
        )
    }
}
export default Historial;
