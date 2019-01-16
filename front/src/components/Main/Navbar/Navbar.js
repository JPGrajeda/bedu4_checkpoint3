import React, { Component } from 'react';

// styles
import './Navbar.css';

// components materialize
import {Navbar, NavItem} from 'react-materialize'

class Upbar  extends Component {

    render(){

        return (
    
            <div>
                <Navbar 
                    className='blue-grey darken-4'
                    brand={
                        <img src='img/Wallet1.png' className="brand responsive-img"></img> 
                    }
                    right 
                    fixed
                >
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
            </div>
    
        )

    }


}



export default Upbar;