import React from 'react';

import { Route } from "react-router-dom";
import Grafica from './Graficas/Graficas';
import Ingresos from './Ingresos/Ingresos';


const Content = props => {

    return (
        <>
             <Route exact path={`${props.match.path}`} render={Grafica}/>
             <Route path={`${props.match.path}/servicios`} render={Ingresos}/>
        </>
    )
  
}

export default Content;