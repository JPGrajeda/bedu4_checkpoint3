import React from 'react';

// components react
import { SideNav } from 'react-materialize';
import { Link } from 'react-router-dom'

// styles
import './Sidebar.css';

const Sidebar = () => {

    var sbar = {
        marginTop: '64px'
    }

    return(
        <>
            <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                <li>
                    <Link to="/dashboard" className="link textCoiny">Home</Link>
                    </li>
                <li className='active'>
                    <Link to="/dashboard/servicios"  className="link textCoiny">Services</Link>
                    </li>
                <li>
                    <Link to="/dashboard/historial" className="link textCoiny">Records</Link>
                </li>
            </SideNav>

        </>
    );
}

export default Sidebar;
