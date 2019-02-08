import React, { Component } from 'react';

// components materialize
import { Row, Col, Carousel, Footer}from "react-materialize";
import styles from './Footer.module.css';

class FooterLogin  extends Component {

    render(){

        return (
            <div className='pd-tb-40'>
                <Row className="container"> 
                    <div className= {styles.txtCoinyFooter} >
                        <h4>Why you will love Watch Wallet?</h4>
                        <hr></hr>
                    </div>
                    <Col l={4} m={4} s={12}>
                        <div className= "center">
                            <i className="large material-icons ">touch_app</i>
                            <h5 className= "black-text"> Anywhere and Anytime</h5>
                            <p></p>
                        </div>
                    </Col >
                    <Col l={4} m={4} s={12}>
                        <div className= "center">
                            <i className="large material-icons ">payment</i>
                            <h5 className= "black-text">Your pay always will be on time </h5>
                            <p></p>
                        </div>
                    </Col>
                    <Col l={4} m={4} s={12}>
                        <div className= "center">
                             <i className="large material-icons">security</i>
                             <h5 className= "black-text">Reliable and Safe</h5>
                             <p></p>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row  className="container">
                         <div className= {styles.txtCoinyFooter} >
                            <h5>These are some services you can pay with Watch Wallet</h5>
                        </div>
                        <div>
                        <Carousel images={[
                            './img/siapa_logo.png',
                            './img/CFE_logo.png',
                            './img/AT&T_logo.png',
                            './img/TELCEL-PAY_logo.png',
                            './img/Movistar_logo.png',
                            './img/MEGACABLE_logo.png',
                            './img/AWS_logo.png',
                            './img/GoDaddy_logo.png',
                            './img/host-gator_logo.png',
                            './img/Liverpool_logo.png',
                            './img/El_Palacio_de_Hierro_logo.png',
                            './img/Xbox_one_logo.png',
                            './img/playstation_logo.png',
                            './img/Soriana_logo.png',
                            './img/Coppel-Mexico-Logo.png',
                            './img/Walmart-Logo.png',
                        ]} />
                        </div>  
                </Row>
                <Row>
                 <Footer
                    copyrights="© 2019 Watch Wallet Latam - A Mountain Nazca-Company. Todos los derechos reservados.Términos y Condiciones Política de privacidad"
                     className='blue-grey darken-4' >
                        
                    <h5 className="white-text">Empresas</h5>
                    <p className="grey-text text-lighten-4">contactos</p>
                 </Footer>
                </Row>
            </div>
        )

    }


}



export default FooterLogin;