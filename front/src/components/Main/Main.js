import React from 'react'

// Router
import { Switch , Route } from "react-router-dom"

// Components
import Dashboard from "./Dashboard/Dashboard"
import Landingpage from "./Landingpage/Landingpage"
import Paymentform from "./Dashboard/Content/Payment/PaymentForm"
import TablaPagos from './Dashboard/Historial/HistorialElementos/TablaPagos';
import ErrorBoundary from '../ErrroBoundary';

const Main = () => (
        <ErrorBoundary>
            <Switch>
                <Route exact path="/" component={ Landingpage }></Route>
                <Route path="/dashboard" component={ Dashboard }></Route>
                <Route path="/tablaPagos" component={ TablaPagos }></Route>
                <Route path="/paymentform" component={Paymentform}></Route>
            </Switch>
        </ErrorBoundary>
    )

export default Main