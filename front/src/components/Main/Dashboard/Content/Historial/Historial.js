import React from 'react';
import TablaPagos  from './HistorialElementos/TablaPagos';
import './Historial.scss';
import Inicio from './../Content/Inicio/Inicio';
import { Route } from "react-router-dom";


const Historial = props => {
        
    return (
        <>    
            <div className="content">
                <Route exact path={`${props.match.path}`} render={Inicio}/>
                <Route path={`${props.match.path}/pagos`} render={TablaPagos} />        
            </div>
        </>
        )
    }

export default Historial;