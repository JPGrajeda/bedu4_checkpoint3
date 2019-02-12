import React, {Component} from 'react';

// components react
import { SideNav } from 'react-materialize';
import { Link } from 'react-router-dom'

// styles
import './Sidebar.css';

class Sidebar extends Component {

    state = {
        isSelected: false
    }    

    handleClick = () => {
        this.setState({
            isSelected: true
        })
    }

    render(){


        var isSelected = this.state.isSelected;
        var style = {
            'backgroundColor': '#ccc'
        };
        if (isSelected) {
            style = {
                'backgroundColor': '#ccc'
            };
        }

        var sbar = {
            marginTop: '64px'
        }
    
        return(
        
            <>
                <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                    <li className='active'>
                        <Link onClick={this.handleClick} style={style} to="/dashboard" className="link textCoiny">Home</Link>
                        </li>
                    {/* <li className='active'>
                        <Link to="/dashboard/servicios"  className="link textCoiny">Services</Link>
                        </li> */}
                    <li>
                        <Link onClick={this.handleClick} style={style} to="/dashboard/historial" className="link textCoiny">Records</Link>
                    </li>
                </SideNav>
    
            </>
        );
    }
}

export default Sidebar;
