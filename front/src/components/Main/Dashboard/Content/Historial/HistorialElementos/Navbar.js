import React  from 'react';

// styles
import stylesNav from './Navbar.module.css';

// components materialize
import {Navbar, NavItem} from 'react-materialize'

const Upbar = () => {



    getSiblings = (elem) => {

        // Setup siblings array and get the first sibling
        var sibling = elem.parentNode.parentNode.firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {                          
                sibling.classList.remove('active');
            }
            sibling = sibling.nextSibling
        }

        elem.parentNode.classList.add('active');
    
    };

    handleClick = (event) => {
        this.getSiblings(event.target);
    }
    
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
                <NavItem onClick={(e) => this.handleClick(e)}  to="/dashboard" className="link textCoiny" >Home</NavItem>
            </Navbar>
        </>
    )

}

export default Upbar;