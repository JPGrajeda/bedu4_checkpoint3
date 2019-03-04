import React  from 'react';

// styles
import stylesNav from './Navbar.module.css';

// components materialize
import {Navbar, NavItem} from 'react-materialize'
import { NavLink } from 'react-router-dom'

const Upbar = () => {

    return (
        <>
            <Navbar id='Navbar'
                className='blue-grey darken-4'
                brand={
                    <div className='valign-wrapper'>
                        <img src='./img/Wallet4.png' className={`${stylesNav.brand} responsive-img`}   alt='Logo'></img>
                        <span className='txtCoiny'>Watch<strong className='ft-green-1 ft-large'>Wallet</strong></span>
                    </div>
                }
                right 
                fixed
            >
                
                <NavLink to="/"><NavItem className='green-1'>Sign out</NavItem></NavLink> 
            </Navbar>
        </>
    )

}

export default Upbar;