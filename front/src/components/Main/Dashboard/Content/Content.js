import React from 'react';

import { Route } from "react-router-dom";

import Inicio from './Inicio/Inicio';
import History from './History/History';


const Content = props => {

    return (
        <>
             <Route exact path={`${props.match.path}`} render={ () => <Inicio /> }/>
             <Route path={`${props.match.path}/history`} render={ () => <History/>}/>
        </>
    )
  
}

export default Content;