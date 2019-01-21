import  React  from 'react';

// imports css style
import stylesInicio from './Inicio.module.css';

// components materialize
import {Row, Col, CardPanel, Collection, CollectionItem, Button, Icon } from 'react-materialize'

const Inicio = () => {
    return(
        <>
        
          <CardPanel className="grey lighten-3 black-text">
            <Row className='m-0'>
              <Col m={12}>
                <Row className='m-0'>
                  <Col m={4}>
                    <CardPanel className="black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                  <Col m={4}>
                    <CardPanel className="black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                  <Col m={4}>
                    <CardPanel className="black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardPanel>
          
          <CardPanel className="grey lighten-3 black-text">
            <Row className='m-0'>
              <Col m={3}>
                <Collection 
                  header={
                    <Row className='m-0'>
                      <Col m={9}>
                        <h5> Income </h5>
                      </Col>
                      <Col m={3}>
                        <Button floating small right className={`${stylesInicio.greenAdd} `} waves='light' icon='add' />
                      </Col>
                    </Row>
                    }
                >
                  <CollectionItem> 
                    Kevin Gonzalez
                    <Icon right>credit_card</Icon>
                  </CollectionItem>
                </Collection>
              </Col>
              <Col m={9}>
                {/* Graficas  */}
                <CardPanel className="black-text">
                  Estadisticas
                </CardPanel>
                {/* servicios */}
                <CardPanel className="black-text">
                  <Row>
                    <Col m={4}>Serivicio 1</Col>
                    <Col m={4}>Serivicio 2</Col>
                    <Col m={4}>Serivicio 3</Col>
                  </Row>
                  <Row>
                    <Col m={4}>Sericivo 1</Col>
                    <Col m={4}>Sericivo 2</Col>
                    <Col m={4}>Sericivo 3</Col>
                  </Row>
                  <Row>
                    <Col m={4}>Serivicio 1</Col>
                    <Col m={4}>Serivicio 2</Col>
                    <Col m={4}>Serivicio 3</Col>
                  </Row>
                  <Row>
                    <Col m={4}>Sericio 1</Col>
                    <Col m={4}>Sericio 2</Col>
                    <Col m={4}>Sericio 3</Col>
                  </Row>
                </CardPanel>
              </Col>
            </Row>
          </CardPanel>
        </>
    )
}

export default Inicio;