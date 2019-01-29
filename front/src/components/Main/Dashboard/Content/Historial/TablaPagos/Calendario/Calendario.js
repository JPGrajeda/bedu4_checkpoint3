import React, { Component } from 'react';
import { Row, Input, Button }  from 'react-materialize';


class Calendario extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
      }
    
    


    render () {
        const { startDate, onStartDateChange} = this.props;
        return (
            <div>
                <Row>
                    <Input 
                        name='startDate' 
                        type='date' 
                        onChange={this.handleChange} onChange={onStartDateChange }
                        onSubmit={ this.handleSubmit }
                        label='Haz click para calendarizar'
                        startdate={startDate}
                    />
                    <p>{this.props.agendar}</p>
                    <div>
                        <Button onClick={() => {this.props.filterChange("NoAlarmado")}}>No alarmar</Button>
                        <Button onClick={() => {this.props.filterChange("Alarmado")}}>Alarmar</Button>
                    </div>
                </Row>
               
            </div>
        )
    }
}

export default Calendario;