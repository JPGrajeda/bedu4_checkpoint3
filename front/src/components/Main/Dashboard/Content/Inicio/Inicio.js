import  React, {Component}  from 'react';

// imports css style
import stylesInicio from './Inicio.module.css';

// components materialize
import {Row, Col, Card, CardPanel, Button, CardTitle } from 'react-materialize'

// components react
import Graphics from './Graphics/Graphics';
import CardContainer from './Cards/CardsContainer';

import axios from 'axios';

import swal from 'sweetalert';

class Inicio extends Component {

  state = {
    _idT: '',
    activeSrvs: [],
    totalServices: 0,
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

  activeServices = (e, servi) => {
      console.log(servi);
      
      let check = document.getElementById(e.target.id);
      if (e.target.checked) {
         swal({
          title: "Are you sure?",
          text: "This service will be added for payment!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
          buttons: ['Add', "Cancel"],
        })
        .then((willActivated) => {
          if (!willActivated) { // yes
          
            let total = Math.floor(Math.random() * parseFloat(servi.precio)) + parseFloat(servi.precio);           
            let servicio = {id_servicio: servi._id,  cantidad: 1, nombre: servi.nombre, importe: total, tipo: servi.tipo };        
            let addServices = this.state.activeSrvs.concat(servicio);       
            this.setState({
              activeSrvs: addServices,
              totalServices:  (this.state.totalServices + total)
            })                      
            swal("The payment was added!", { icon: "success" });
            check.checked = true;
          } else { // no
            swal("The payment was not added!", { icon: "success" });
            check.checked = false;
          }
        });   
      }else{
        
        swal({
          title: "Are you sure?",
          text: "This service will be removed for payment!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
          buttons: ['Remove', "Cancel"],
        })
        .then((willActivated) => {
          if (!willActivated) { // yes        
                     
            console.log(this.state);

            let srvDelete = this.state.activeSrvs.filter( function(obj) {
              return obj.nombre === servi.nombre;
            })
            
            // eliminamos el servicio del array
            let deleteServices = this.state.activeSrvs.filter( function(obj) {
              return obj.nombre !== servi.nombre;
            })

            console.log(deleteServices);
            

            this.setState({
              activeSrvs: deleteServices,
              totalServices:  parseFloat(this.state.totalServices - srvDelete[0].importe)
            })   


            swal("The payment was removed!", { icon: "success" });
            check.checked = false;
          } else { // no
            swal("The payment was not removed!",{icon: "success"});
            check.checked = true;
          }
        });   

        check.checked = false;
      }
      
  }


  charge = async (data) => {
    console.log('data: ',data);
    let pay = await axios.post('/api/pagos',data);
    return pay;
  }


  pay = async () => {

    swal({
      title: "Are you sure?",
      text: "You want to pay for services!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: ['Pay', "Cancel"],
    })
    .then((willActivated) => {
      if (!willActivated) { // yes 
  
        let pago = {
            "fecha": '06-03-2018',
            "id_tarjeta": this.state._idT,
            "total": this.state.totalServices,
            "servicio": this.state.activeSrvs
        }
        
        let pay = this.charge(pago);

        console.log(pago);
        
        if(this.state.totalServices === 0)
          return swal("There are not added services to pay!", { icon: "error" });

        swal("The payment was satisfactory!", { icon: "success" });
      } else { // no
        swal("The payment was canceled!", { icon: "success" });
      }
    });   

  }

  componentDidMount(){
    this.getAllServices();
  }

  render(){    
    console.log(this.state);
    
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
                <input type="checkbox" id={obj._id} onClick={ (e) => this.activeServices(e, obj) } />
                <span className="lever"></span>
                On
              </label>
            </div>
          </Card>
        </Col>
        )
      }else{
        return( 
          ''
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

                <Col m={4}>
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
                <Col m={4}>
                  <CardPanel className="black-text">
                    <h5>Amount to pay</h5>
                    <div className="divider green-1-light"></div>
                    <div className='divFlex-center'>
                      <div>
                        <h5> $ {this.state.totalServices}  </h5>
                      </div>
                    </div>
                  </CardPanel>
                </Col>
                <Col m={4}>
                  <CardPanel className="black-text">
                    <div className='divFlex-center'>
                      <div>
                        <Button waves='light' className='btn-large' onClick={()=> this.pay()}> pay now</Button>
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
              {/* <CardPanel className="black-text"> */}
                <Graphics dataT={this.state._idT}></Graphics>
              {/* </CardPanel> */}
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