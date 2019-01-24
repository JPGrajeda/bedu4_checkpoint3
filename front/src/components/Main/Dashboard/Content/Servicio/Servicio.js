import  React  from 'react';

// components materialize
import {Row, Col, CardPanel} from 'react-materialize'

const Servicio = () => {
    return(
        <>
             <CardPanel className="grey lighten-3 black-text">
                <Row className='m-0'>
                    <Col m={12}>
                      <h5 className='ft-bold'>Grupo 1</h5>
                      <div className="divider ft-green-1"></div>
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col m={12}>
                      <h5>Grupo 2</h5>
                      <div className="divider"></div>
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col m={12}>
                      <h5>Grupo 3</h5>
                      <div className="divider"></div>
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col m={12}>
                      <h5>Grupo 4</h5>
                      <div className="divider"></div>
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col m={12}>
                      <h5>Grupo 5</h5>
                      <div className="divider"></div>
                    </Col>
                </Row>
              </CardPanel>

            
        </>
    )
}

export default Servicio;