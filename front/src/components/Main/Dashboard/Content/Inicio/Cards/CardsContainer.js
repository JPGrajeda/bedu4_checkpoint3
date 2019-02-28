import React, {Component} from 'react';
// components materialize
import {CardPanel, Icon, Button, Modal, Row, Input } from 'react-materialize'
import axios from 'axios';
// imports css style
import stylesInicio from '../Inicio.module.css';

class CardsContainer extends Component{
  constructor(props) {
    super(props);
    this.state= {
      _id:"",
      card_number: "",
      security_code:0,
      exp_date_mm:"",
      exp_date_yy:"",
      alias:"",
      cards:[],
      isModalOpen:false,
    }
  }
 
  componentDidMount(){
    this.GetCardsAPI();
  }

  GetCardsAPI = async() => {
       axios.get('http://localhost:5000/api/tarjetas')
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  AddCard = async(e)=>{
    e.preventDefault();
    const card = {
      cuenta : this.state.card_number,
      pin: this.state.security_code,
      fechaVencimiento: `${this.state.exp_date_mm}-${this.state.exp_date_yy} `,
      alias: this.state.alias,
    }
    console.log(card)
    try{
      await  axios.post('http://localhost:5000/api/tarjetas',card)
      this.setState({isModalOpen:false})
      this.GetCardsAPI();
    }
    catch(error) {
      console.error(error);
    }
  }

  GetCards = async () => {
    const res = await this.GetCardsAPI();
    this.setState({
      cards: res.data
    })
  }

  deleteCard(){
    console.log('eliminar')
  }
  


handleInputChange = event => {
  this.setState({
    [event.target.id]: event.target.value,
  });
};
handleOpenModal = (x)=>{
  this.setState({isModalOpen:true});
}
    
    render(){
        return(
        <div>
             <CardPanel className="black-text">
                        <div className='divFlex-space-betwwen'>
                          <div>
                            <h5>Cards </h5>
                          </div>
                          <div>
                          <Button  floating className={`${stylesInicio.greenAdd} `} waves='light' icon='add' onClick={()=>this.handleOpenModal()} /> 
                            <Modal
                              open={this.state.isModalOpen}
                              header='Provide a payment method'>
                              <p>We don't share your financial details with the merchant</p>
                              <form onSubmit={(e)=>this.AddCard(e)}>
                                <Row>
                                      <Input required autoFocus id="card_number" s={6} label="Card Number" onChange={(e) => this.handleInputChange(e)} />
                                      <Input required id="exp_date_mm"  s={3} label="Expiration date" placeholder="MM" onChange={(e) => this.handleInputChange(e)} /> 
                                      <Input required id="exp_date_yy" s={3} placeholder="YY" onChange={(e) => this.handleInputChange(e)} /> 
                                      <Input required id="security_code" s={3} label="Security Code" onChange={(e) => this.handleInputChange(e)} />
                                      <Input required id="alias" s={6} label="Alias" onChange={(e) => this.handleInputChange(e)} />
                                  </Row>
                                  <Button type="submit" waves='light'>Save</Button>
                              </form>
                                 
                          </Modal>
                          </div>
                        </div>
                          <div className="divider green-1-light"></div>
                        <br/>
                        {this.state.cards.map(function(x, i){
                          return (
                            <div key={i} className='divFlex-space-betwwen'>
                              <h6> 
                                {x.alias} 
                                 <Button  floating className={`${stylesInicio.greenAdd} `} waves='light' icon='delete' onClick={()=>this.deleteCard()} /> 
                                <Icon right >credit_card</Icon>
                              </h6>

                            </div>
                          )
                          
                        })}
                    </CardPanel>
                     
        </div>
        )
    }
}
export default CardsContainer;