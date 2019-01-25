import React, { Component } from 'react';
import { Row, Input }  from 'react-materialize';


class Calendario extends Component {
    
    constructor() {
        super();
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
        return (
            <div>
                <Row>
                    <Input 
                        name='startDate' 
                        type='date' 
                        onChange={this.handleChange} 
                        onSubmit={ this.handleSubmit }
                        selected={this.state.startDate}
                        value={this.state.starDate}
                        label='Haz click para calendarizar'
                    />
                </Row>    
            </div>
        )
    }
}

export default Calendario;