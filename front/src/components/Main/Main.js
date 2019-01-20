import React from 'react'

// Router
import { Switch , Route } from "react-router-dom"

// Components
import Dashboard from "./Dashboard/Dashboard"
import Landingpage from "./Landingpage/Landingpage"

const Main = () => (
        <>
            <Switch>
                <Route exact path="/" component={ Landingpage }></Route>
                <Route path="/dashboard" component={ Dashboard }></Route>
            </Switch>
        </>
    )

export default Main