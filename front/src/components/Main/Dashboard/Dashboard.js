import React from 'react';

// styles
import './Dashboard.css';

// Router
import { Route } from "react-router-dom";

// component
import Upbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = (props) => (
	<div>
		<Upbar/>
        <Sidebar/>
        <div className='content'>
            prueba
        </div>
	</div>
);

export default Dashboard;