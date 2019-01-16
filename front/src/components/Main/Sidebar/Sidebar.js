import React, { Component } from 'react';

import { SideNav, SideNavItem } from 'react-materialize';

const Sidebar = (props) => {

    var sbar = {
        marginTop: '64px'
    }

    return(
        <div>
            <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                <SideNavItem className='textCoiny txt-15 active'>Ingresos</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Serivicios</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Item 3</SideNavItem>
            </SideNav>
        </div>
    );
}

export default Sidebar;
