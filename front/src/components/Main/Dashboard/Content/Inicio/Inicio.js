import  React  from 'react';

// imports css style
import stylesInicio from './Inicio.module.css';

// components materialize
import {Row, Col, Card, CardPanel, Button, CardTitle } from 'react-materialize'

// components react
import Graphics from './Graphics/Graphics';
import CardContainer from './Cards/CardsContainer';

const Inicio = () => {
    return(
        <>
        
          <CardPanel className="grey lighten-3 black-text">
            <Row className='m-0'>
              <Col m={12}>
                <Row className='m-0'>

                  <Col m={3}>
                    <CardContainer/>
                  </Col>   
                  
                  <Col m={3}>
                    <CardPanel className="black-text">
                      <h5>Closing date</h5>
                      <div className="divider green-1-light"></div>
                      <div className='divFlex-center'>
                        <div>
                          <h5> 13 de abril de 2019  </h5>
                        </div>
                      </div>
                    </CardPanel>
                  </Col>
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
                  <Graphics></Graphics>
                </CardPanel>
              </Col>
            </Row>

            <Row>
                <Col m={12}>
                  {/* servicios */}
                  <CardPanel className="black-text">
                    <Row>
                      <h5 className='ft-bold'>Banks</h5>
                      <div className="divider green-1-light"></div>
                      <br/>
                      <Col m={3}>
                        <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/SANTANDER_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                        <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/BANAMEX_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/HSBC_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/BBVA_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <h5 className='ft-bold'>Basic Services</h5>
                      <div className="divider green-1-light"></div>
                      <br/>
                      <Col m={3}>
                        <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/CFE_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                        <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/SIAPA_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/TELMEX_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/ZETA_logo.svg`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <h5 className='ft-bold'>Streaming</h5>
                      <div className="divider green-1-light"></div>
                      <br/>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/NETFLIX_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/PRIME_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/YOUTUBE_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hover2able'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/SPOTIFY_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <h5 className='ft-bold'>Games</h5>
                      <div className="divider green-1-light"></div>
                      <br/>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/STEAM_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/ORIGIN_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hover2able'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/SWITCH_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                           <Card className='card-panel 2hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/PLAYSTATION_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <h5 className='ft-bold'>TV Services</h5>
                      <div className="divider green-1-light"></div>
                      <br/>
                      <Col m={3}>
                          <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/MEGACABLE_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/SKY_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/TOTALPLAY_logo.png`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                      <Col m={3}>
                      <Card className='card-panel hoverable'
                          header={ 
                              <CardTitle className={`${stylesInicio.responsiveImg} divFlex-center`} image={`./img/services/DISH_logo.svg`}></CardTitle>
                          }
                        >        
                        <div className="divider green-1"></div>
                          {/* Switch  */}
                        <div className="switch divFlex-center mt-20">
                            <label>
                              Off
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              On
                            </label>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </CardPanel>
                </Col>
            </Row>

          </CardPanel>
        </>
    )
}

export default Inicio;