import React, { Component } from 'react';
import TablaPagos  from './TablaPagos/TablaPagos';
import './Historial.css';


class Historial extends Component {

    render () {
        return (
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <TablaPagos></TablaPagos>            
            </div>
        )
    }
}
export default Historial;
