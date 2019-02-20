import React, { Component } from 'react';
import TablaPagos  from './HistorialElementos/TablaPagos';
import './Historial.scss';
import ErrorBoundary  from './HistorialElementos/ErrroBoundary';
// import  Futer from './HistorialElementos/Futer';

class Historial extends Component {

    render () {
        
        return (
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <ErrorBoundary>
                    <TablaPagos />
                    {/* <Futer /> */}
                </ErrorBoundary>           
            </div>
        )
    }
}
export default Historial;
