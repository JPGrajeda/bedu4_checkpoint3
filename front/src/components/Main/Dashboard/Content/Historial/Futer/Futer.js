import React,{ Component } from 'react';
import {Footer, Checkbox} from 'react-materialize';
// import './Futer.scss';

class Futer extends Component {
    constructor (props) {
        super (props)
        this.state = {startDate: ""};
        

    }
    render () {
        
        if(this.props.startDate) {
        let startDateList = this.props.startDate.map((startDate, index) => {
            return (
                <li key={index}>
                    <Checkbox onChange={(e) => this.props.alarmsChange(e, index)} checked={startDate.alarmado}> </Checkbox>
                    {startDate.pago}
                </li>
            )
        })}
        return (
            <Footer>
                <div className="footer-container">
                    <ul>{this.startDateList} </ul>
                </div>
            </Footer>
        )
}}

export default Futer;