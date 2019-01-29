import React,{ Component } from 'react';
import {Footer} from 'react-materialize';
// import './Futer.scss';

class Futer extends Component {
    constructor () {
        super ()
        this.state = {startDate: ""};
    }
    render () {
        const {startDate}  = this.props;
        return (
            <Footer>
                <div className="footer-container">
                    <ol>{startDate} </ol>
                </div>
            </Footer>
        )
}}

export default Futer;