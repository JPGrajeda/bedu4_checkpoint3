import React, { Component } from "react";

import { Button, Row, Col, Card, Input, Tab, Tabs}from "react-materialize";
import {  withRouter } from 'react-router-dom';
// styles
import styles from './Login.module.css';


class Login extends Component {

    state= {
        data: [],
        password: '',
        nombre:'',
        access: false
    }
    
    nombre = e => this.setState({nombre: e.target.value });
    password = e => this.setState({password: e.target.value });
  
    checkUserAndPassword = e => {
        const { nombre, password} = this.state;
        e.preventDefault();
        fetch('http://localhost:3005/autenticar',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            // Model
            {
                username: nombre,
                password: password}
          )
        })
          .then((data)=> {
            if(data.status === 200){
             return this.props.history.push("/dashboard");
            }else {
                alert("you dont have access Try Again!");
            }
          })
    
      }
    

    render(){
     
        return(
            <div className ="green-2">

                <Row className = {styles.gridTemplate }>
                    <Col l={4} m={3} s={12} className= " center-align" >
                        <div className= {styles.padingLogin }>
                            <Tabs >
                                <Tab className= "" title="Sign in" className={styles.tabs} active >
                                    <Card className= {styles.backgroundCard} >
                                        <h5>Sign in</h5>
                                        <form onSubmit={e=> this.checkUserAndPassword(e)}>
                                            <Input onChange={e=> this.nombre(e)} label="nombre" s={12} />
                                            <Input onChange={e=> this.password(e)} type="password" label="Password" s={12} />
                                            <Button type="submit">Sign in</Button>
                                        </form>
                                    </Card>
                                </Tab>
                                <Tab title="Sign up">
                                    <Card className= {styles.backgroundCard} >
                                        <h5>Sign up</h5>
                                        <form>
                                            <Input label="Nombre" s={12} />
                                            <Input label="Correo" s={12} />
                                            <Input type="password" label="Password" s={12} />
                                            <Input type="password" label="Confirma Password" s={12} />
                                            <Button type="submit">Sign up</Button>
                                        </form>
                                    </Card>
                                </Tab>
                            </Tabs>
                        
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

export default withRouter (Login);
