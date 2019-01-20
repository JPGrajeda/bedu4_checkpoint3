import React from 'react';

// Router
import { Route } from "react-router-dom";

// Components
import Dashboard from "./Dashboard/Dashboard";
import Landingpage from "./Landingpage/Landingpage";

const Main = (props) => (
        <>
            <Route exact path="/" render={ Landingpage }></Route>
            <Route exact path="/dashboard" render={ Dashboard }></Route>
        </>
    )

export default Main;