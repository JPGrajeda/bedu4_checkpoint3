import React, { Component } from 'react';

import { SideNav, SideNavItem } from 'react-materialize';

const Sidebar = (props) => {

    var sbar = {
        marginTop: '64px'
    }

    return(
        <div>
            <SideNav className='blue-grey darken-3' style={sbar} fixed>
                <SideNavItem id="1">Ingresos</SideNavItem>
                <SideNavItem id="2">Serivicios</SideNavItem>
                <SideNavItem id="3">Item 3</SideNavItem>
            </SideNav>
        </div>
    );
}

export default Sidebar;
