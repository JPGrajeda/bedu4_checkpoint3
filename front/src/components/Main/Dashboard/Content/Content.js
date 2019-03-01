import React from 'react';

import { Route } from "react-router-dom";

import Inicio from './Inicio/Inicio';
import Servicio from './Servicio/Servicio';


const Content = props => {

    return (
        <>
             <Route exact path={`${props.match.path}`} render={ () => <Inicio /> }/>
             <Route path={`${props.match.path}/servicios`} render={Servicio}/>
        </>
    )
  
}

export default Content;