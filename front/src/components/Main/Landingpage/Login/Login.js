import React, { Component } from "react";

import { Button }from "react-materialize";
import {  Redirect } from 'react-router-dom';

class Login extends Component {

    state= {
        access: false
    }

    checkLogingStatusCode= () => {
        this.setState({access: true})
    }
    render(){
        if(this.state.access){
            return <Redirect to = "/dashboard"></Redirect>
        }else {
            
        }
        

        return(
            <div>
             <Button onClick={this.checkLogingStatusCode}>Acceder</Button>
            </div>

        )
    }

}

export default Login;