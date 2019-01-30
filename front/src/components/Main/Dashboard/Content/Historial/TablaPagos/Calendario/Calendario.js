import React, { Component } from 'react';
import { Row, Input, Button }  from 'react-materialize'; 

 
class Calendario extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date:"",
      
            selectDate:""
    }
}




    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.date
        console.log(main.format('L'));
      }
 
    render () {
    
        return (
            <div>
                <Row>
                    <Input 
                        name='on' 
                        type='date' 
                        // onClick={this.handleChange} 
                        onSubmit={ this.handleSubmit }
                       
                        label='Haz click para calendarizar'
                        
                        
                    />
                    <p>{this.props.alarmar}</p>
                    <div>
                        <Button onClick={() => {
                                window.Materialize.toast(`I am a toast!` + this.date, 10000)
                            } 
                        }>
                            Alarmar
                        </Button>
                        <Button onClick={() => {
                                const toast = document.querySelector('#toast-container>.toast');
                                if (toast) {
                                    toast.remove();
                                }
                            }
                        }>
                            Cancelar alarma
                        </Button>

                           
                    </div>
                </Row>
               
            </div>
        )
    }
}

export default Calendario; 