import React from 'react';

// styles
import stylesNav from './Navbar.module.css';

// components materialize
import {Navbar, NavItem} from 'react-materialize'

const Upbar = () => {

    return (
        <>
            <Navbar id='Navbar'
                className='blue-grey darken-4'
                brand={
                    <div className='valign-wrapper'>
                        <img src='./img/Wallet1.png' className={`${stylesNav.brand} responsive-img`}   alt='Logo'></img>
                        <span className='txtCoiny'>WatchWallet</span>
                    </div>
                }
                right 
                fixed
            >
                <NavItem onClick={() => console.log('test click')} className='green-1'>Cerrar Sesion</NavItem>
            </Navbar>
        </>
    )

}

export default Upbar;