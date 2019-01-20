import  React  from 'react';

// imports css style
import stylesGraficas from './Graficas.module.css';

// components materialize
import {Row, Col, CardPanel, Collection, CollectionItem, Button, Icon } from 'react-materialize'

const Grafica = () => {
    return(
        <>
        <Row>
            <Col m={12}>
              <CardPanel className="grey lighten-3 black-text">
                <Row>
                  <Col m={4}>
                    <CardPanel className="grey lighten-5 black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                  <Col m={4}>
                    <CardPanel className="grey lighten-5 black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                  <Col m={4}>
                    <CardPanel className="grey lighten-5 black-text">
                      <h5>kljsdljf</h5>
                      <div class="divider"></div>
                    </CardPanel>
                  </Col>
                </Row>
              </CardPanel>
            </Col>
          </Row>
          <Row>
            <Col m={3}>
              <Collection 
                header={
                  <Row className='m-0'>
                    <Col m={9}>
                      <h5> Ingresos </h5>
                    </Col>
                    <Col m={3}>
                      <Button floating small right className={`${stylesGraficas.greenAdd} `} waves='light' icon='add' />
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
              <CardPanel className="grey lighten-3 black-text">
                Estadisticas
              </CardPanel>
            </Col>
          </Row>
        </>
    )
}

export default Grafica;