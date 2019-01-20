import React, { Component } from "react";

import { Button, Row, Col, Card, Input}from "react-materialize";
import {  Redirect } from 'react-router-dom';
// styles
import styles from './Login.module.css';

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
            <div className ="green-1">
                <Row className = {styles.gridTemplate }>
                    <Col l={4} m={3} s={12} className= " center-align" >
                        <div className= {styles.padingLogin}>
                            <Card className= {styles.backgroundCard} >
                                <h5>Sign in</h5>
                                <Input  label="User" s={12} />
                                <Input type="password" label="Password" s={12} />
                                <Button onClick={this.checkLogingStatusCode}>Sign in</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col l={8} m={9} s={12}  className = {styles.colForm}>
                        <img className= {styles.backgroundImgLogin} src='./img/background_login_complete.jpg' alt= "background"></img>
                        
                    </Col>
                </Row>
                
            </div>

        )
    }

}

export default Login;
