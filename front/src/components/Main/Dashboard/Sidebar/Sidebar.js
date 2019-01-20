import React, { Component } from 'react';

// components react
import { SideNav, SideNavItem } from 'react-materialize';
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
                {/* <SideNavItem className='textCoiny txt-15 active'>Home</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Serivicios</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Historial</SideNavItem> */}
                <li><Link className="link textCoiny" to="/dashboard">Inicio</Link></li>
                <li className='active'><Link className="link textCoiny" to="/dashboard/servicios">Servicios</Link></li>
                <li><Link className="link textCoiny" to="/dashboard">Historial</Link></li>
            </SideNav>

        </>
    );
}

export default Sidebar;
