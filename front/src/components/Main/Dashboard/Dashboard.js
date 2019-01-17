import React from 'react';

// styles
import './Dashboard.css';

// Router
import { Route } from "react-router-dom";

// component
import Upbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Content from './Content/Content';

const Dashboard = (props) => (
	<div>
		<Upbar/>
        <Sidebar/>
        <div className='content'>
            <Content/>
        </div>
	</div>
);

export default Dashboard;