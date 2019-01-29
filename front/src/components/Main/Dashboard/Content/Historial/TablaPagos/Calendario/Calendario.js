import React, { Component } from 'react';
import { Row, Input }  from 'react-materialize';


class Calendario extends Component {
    
    constructor() {
        super();
        this.state = {
            startDate: new Date(),
            isGoing: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date, event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
        [date]: value
    });
  }



    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    };
    
    


    render () {
        const { startDate, onStartDateChange} = this.props;
        return (
            <div>
                <Row>
                    <Input 
                        name='isGoing' 
                        onChange={this.handleChange} onChange={onStartDateChange }
                        onSubmit={ this.handleSubmit }
                        label='Haz click para calendarizar'
                        defaultChecked={this.props.startDate}
                        startdate={startDate}
                        type="checkbox"
                        checked={ this.state.isGoing }
                        onChange={ this.checkboxHandler } 
                    />
                </Row>
                   
            </div>
        )
    }
}

export default Calendario;