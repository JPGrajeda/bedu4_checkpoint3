import React, { Component } from 'react';

// components materialize
import {Navbar, NavItem} from 'react-materialize';
import styles from './Navbar.module.css';

class NavBar  extends Component {

    render(){

        return (
                <Navbar 
                    brand={
                        <div className= "valign-wrapper">
                            <img src='./img/Wallet1.png' className={styles.brand}  alt='Logo'></img>
                            <span className='txtCoiny NavCenter'>WatchWallet</span>
                        </div>
                    } 
                    
                    className='blue-grey darken-4 NavMargin' 
                    right 
                    fixed
                >
                
                </Navbar>
        )

    }

}



export default NavBar;