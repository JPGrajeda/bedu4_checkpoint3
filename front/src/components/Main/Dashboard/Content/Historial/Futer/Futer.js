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
        let alarmList = this.props.startDate.map((startDate, index) => {
            return (
                <li key={index}>
                    <Checkbox 
                        onChange={(e) => this.props.alarmsChange(e, index)}
                        onChange={(e) => this.handleStartDateChange(e)} 
                        value={this.state.startDate}checked={startDate.alarmado}> </Checkbox>
                    
                </li>
            )
        })}
        return (
            <Footer>
                <div className="footer-container">
                    <ul>
                       {this.alarmList} 
                    </ul>
                </div>
            </Footer>
        )
}}

export default Futer;