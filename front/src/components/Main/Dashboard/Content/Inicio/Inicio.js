import  React, {Component}  from 'react';

// imports css style
import stylesInicio from './Inicio.module.css';

// components materialize
import {Row, Col, Card, CardPanel, Button, CardTitle } from 'react-materialize'

// components react
import Graphics from './Graphics/Graphics';
import CardContainer from './Cards/CardsContainer';

import axios from 'axios';
import { log } from 'util';

class Inicio extends Component {

  state = {
    _idT: '',
    totalAmount: 0,
    services: []
  }

  childHandler = (dataFromChild) => {
    this.setState({
      _idT: dataFromChild
    });

  }

  getAllServices = async () => {
    try {
      let response = await axios.get('/api/servicios');
      this.setState({ services: response.data });
    } catch (error) {
      console.log(error);
    }  
  }

  componentDidMount(){
    this.getAllServices();
  }

  render(){    
    let unique = [...new Set(this.state.services.map(item => item.tipo))];   

    let showServices = (type) => this.state.services.map((obj, index) => {
      if(obj.tipo === type){
        return(
          <Col m={3} key={index}>
          <Card className='card-panel hoverable'
            header={ 
                <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/${obj.foto}`}></CardTitle>
            }
          >        
          <div className="divider green-1"></div>
            {/* Switch  */}
          <div className="switch divFlex-center mt-20">
              <label>
                Off
                <input type="checkbox" id={obj._id}/>
                <span className="lever"></span>
                On
              </label>
            </div>
          </Card>
        </Col>
        )
      }
    });

    let show = unique.map((obj,index) => {
      let title;
      if(obj === 'serviciosBasicos'){
        title = 'Basic Services';
      }else if(obj === 'streaming'){
        title = 'Streaming';
      }else if(obj === 'games'){
        title = 'Games';
      }else if(obj === 'tvServices'){
        title = 'TV Services';
      }
      return (
        <div key={index}>
          <h5 className='ft-bold'>{title}</h5>
          <div className="divider green-1-light"></div>
          <br/>
          {showServices(obj)}
        </div>
      )
    });


    return(
      
      <>
        <CardPanel className="grey lighten-3 black-text">
          <Row className='m-0'>
            <Col m={12}>
              <Row className='m-0'>

                <Col m={3}>
                  <CardContainer action={this.childHandler}/>
                </Col>   
                
                {/* <Col m={3}>
                  <CardPanel className="black-text">
                    <h5>Closing date</h5>
                    <div className="divider green-1-light"></div>
                    <div className='divFlex-center'>
                      <div>
                        <h5> 13 de abril de 2019  </h5>
                      </div>
                    </div>
                  </CardPanel>
                </Col> */}
                <Col m={3}>
                  <CardPanel className="black-text">
                    <h5>Amount to pay</h5>
                    <div className="divider green-1-light"></div>
                    <div className='divFlex-center'>
                      <div>
                        <h5> $ 0  </h5>
                      </div>
                    </div>
                  </CardPanel>
                </Col>
                <Col m={3}>
                  <CardPanel className="black-text">
                    <div className='divFlex-center'>
                      <div>
                        <Button waves='light' className='btn-large'> pay now</Button>
                      </div>
                    </div>
                  </CardPanel>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardPanel>
        
        <CardPanel className="grey lighten-3 black-text">
          <Row className='m-0'>


            {/* Graficas  */}
            <Col m={12}>
              <CardPanel className="black-text">
                <Graphics dataT={this.state._idT}></Graphics>
              </CardPanel>
            </Col>
          </Row>

          <Row>
              <Col m={12}>                  
                    { 
                      show
                    }
              </Col>
          </Row>

        </CardPanel>
      </>
  )

  }
    
}

export default Inicio;