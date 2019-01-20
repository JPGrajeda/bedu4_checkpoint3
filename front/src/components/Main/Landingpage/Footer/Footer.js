import React, { Component } from 'react';

// components materialize
import { Row, Col}from "react-materialize";
import styles from './Footer.module.css';

class FooterLogin  extends Component {

    render(){

        return (
            <div>
                <Row className> 
                    <div className= {styles.txtCoinyFooter} centered>
                        <h4>Now is easy to pay all you services and a single place</h4>
                        <hr></hr>
                    </div>

                    <Col>
                        <div>
                            ale
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>
                            ale
                        </div>
                    </Col>
                </Row>
            </div>
        )

    }


}



export default FooterLogin;