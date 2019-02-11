import React, { Component } from "react";

import { Button, Row, Col, Input}from "react-materialize";

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
     
        var img = {
            backgroundImage: 'url(./img/fondo.png )',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            position: 'relative'
        }

        return(
            <div className='pd-tb-40 green-1' style={img}>
                <div className='container'>
                    <Row className= {styles.gridTemplate }>
                        <Col l={6} m={6} s={12}>
                            <h1 className='txtCoiny white-text'>We take care of it</h1>
                            <p className='white-text ft-25 ft-bold'>  
                                WatchWallet is an electronic wallet platform created to take care of your money. 
                                You can manage the most used services, graph and make decisions based on history.
                            </p>
                        </Col>
                        <Col l={6} m={6} s={12} className='divFlex-center'>
                            <div className={`${styles.login} z-depth-5`}>
                                <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width">
                                    <li className="tab col s3 grey lighten-3 black-text">
                                        <a className={`${styles.pils} active`} href="#sing_in">Sign in</a>
                                    </li>
                                    <li className="tab col s3 grey lighten-3 black-text">
                                        <a className={`${styles.pils}`} href="#sing_up">Sign up</a>
                                    </li>
                                </ul>
                                <div id="sing_in" className="col s12 grey lighten-3 z-depth-5">
                                    <form onSubmit={e=> this.checkUserAndPassword(e)} className='center-align'>
                                        <Input onChange={e=> this.nombre(e)} label="User" s={12} />
                                        <Input onChange={e=> this.password(e)} type="password" label="Password" s={12} />
                                        <Button type="submit" className='mtb-20'>Sign in</Button>
                                    </form>
                                </div>
                                <div id="sing_up" className="col s12 grey lighten-3 z-depth-5">
                                    <form onSubmit={e=> this.checkUserAndPassword(e)} className='center-align'>
                                        <Input label="Name" s={12} />
                                        <Input label="User" s={12} />
                                        <Input label="Password" s={12} />
                                        <Button type="submit" className='mtb-20'>Sign in</Button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }

}

export default withRouter (Login);
