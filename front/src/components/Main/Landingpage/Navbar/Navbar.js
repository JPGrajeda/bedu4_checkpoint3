import React, { Component } from 'react';

// components materialize
import {Navbar} from 'react-materialize';
import styles from './Navbar.module.css';

class NavBar  extends Component {

    render(){

        return (
                <Navbar 
                    brand={
                        <div className="valign-wrapper">
                            <img src='./img/Wallet4.png' className={styles.brand}  alt='Logo'></img>
                            <span className='txtCoiny NavCenter'>WatchWallet</span>
                        </div>
                    } 
                    
                    className='blue-grey darken-4 NavMargin' 
                    right 
                    fixed
                >
                    {/* <NavItem className='asdasd'>Sign in</NavItem>
                    <NavItem className=''>Sign up</NavItem> */}
                </Navbar>
        )

    }

}



export default NavBar;