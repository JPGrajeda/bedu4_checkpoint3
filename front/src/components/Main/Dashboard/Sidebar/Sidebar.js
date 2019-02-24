import React, {Component} from 'react';

// components react
import { SideNav } from 'react-materialize';
import { Link } from 'react-router-dom';


// styles
import './Sidebar.scss';

class Sidebar extends Component {

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

    render(){

        var sbar = {
            marginTop: '64px'
        }
    
        return(
        
            <>
                <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                    <li className='active'>
                        <Link onClick={(e) => this.handleClick(e)}  to="/dashboard" className="link textCoiny" >Home</Link>
                        </li>
                    {/* <li className='active'>
                        <Link to="/dashboard/servicios"  className="link textCoiny">Services</Link>
                        </li> */}
                    <li>
                        <Link onClick={(e) => this.handleClick(e)} to="/tablaPagos" className="link textCoiny">Records</Link>
                    </li>
                </SideNav>
    
            </>
        );
    }
}

export default Sidebar;
