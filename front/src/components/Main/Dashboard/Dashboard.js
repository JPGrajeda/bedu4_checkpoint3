import React from 'react';

// Router
import { Route } from "react-router-dom";

import Navbar from '../Navbar/Navbar';

const Dashboard = (props) => (
	<div>
		<Navbar/>
        <div>
            {console.log(`${props.match.url}buttons`)}
            <Route path={`${props.match.url}ruta1`} component={ () => <h1>asdasdasdas</h1> } />
        </div>
	</div>
);

export default Dashboard;