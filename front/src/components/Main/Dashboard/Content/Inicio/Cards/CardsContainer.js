import React, {Component} from 'react';
// components materialize
import {CardPanel, Button, Modal, Row, Input } from 'react-materialize'
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
      _id : this.state._id,
      cuenta : this.state.card_number,
      pin: this.state.security_code,
      fechaVencimiento: `${this.state.exp_date_mm}-${this.state.exp_date_yy} `,
      alias: this.state.alias,
    }
    try{
      await  axios.post(this.state._id ? 'http://localhost:5000/api/tarjetas':`http://localhost:5000/api/tarjetas/${this.state._id}`,card)
      this.setState({isModalOpen:false})
      this.GetCardsAPI();
    }
    catch(error) {
      console.error(error);
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleOpenModal = (x)=>{
    this.setState({isModalOpen:true});
  }

  onDeleteCard = async(x) =>{
    try{
      await axios.delete(`http://localhost:5000/api/tarjetas/${x._id}`);
      this.GetCardsAPI();
    }
    catch(error){
      console.error(error);
    }
  }

  onUpdateCard = async(x)=>{
    try{
      const response = await axios.get(`http://localhost:5000/api/tarjetas/${x._id}`);
      this.setState({
        _id:response.data[0]._id,
        card_number: response.data[0].cuenta,
        security_code:response.data[0].pin,
        exp_date_mm:response.data[0].fechaVencimiento,
        exp_date_yy:response.data[0].fechaVencimiento,
        alias:response.data[0].alias,
        isModalOpen: true
      })
    }
    catch(error){
      console.error(error);
    }
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
                              <div className="divider green-1-light"></div>
                              <table  className='divFlex-space-betwwen'>
                                <tbody>
                                  {this.state.cards.map(x=> {
                                    return(
                                      <tr key={x._id}>
                                          <td>
                                              <h6> 
                                                {x.alias} 
                                              </h6>
                                          </td>
                                          <td>
                                              <Button style={{padding: '0px'}} flat  waves='teal'  icon='credit_card' onClick= {()=>this.onUpdateCard(x)}/> 
                                          </td>
                                          <td>
                                              <Button style={{padding: '0px'}} flat  waves='teal'  icon='delete'  onClick= {()=>this.onDeleteCard(x)}/>
                                          </td>
                                      </tr>
                                      )
                                })}
                                </tbody>
                              </table>
                              <Modal
                                open={this.state.isModalOpen}
                                header='Provide a payment method'>
                                <p>We don't share your financial details with the merchant</p>
                                <form onSubmit={(e)=>this.AddCard(e)}>
                                  <Row>
                                        <Input required autoFocus id="card_number" s={6} label="Card Number" onChange={(e) => this.handleInputChange(e)}  value={this.state.card_number}/>
                                        <Input required id="exp_date_mm"  s={3} label="Expiration date" placeholder="MM" onChange={(e) => this.handleInputChange(e)}  value={this.state.exp_date_mm}/> 
                                        <Input required id="exp_date_yy" s={3} placeholder="YY" onChange={(e) => this.handleInputChange(e)} value={this.state.exp_date_yy} /> 
                                        <Input required id="security_code" s={3} label="Security Code" onChange={(e) => this.handleInputChange(e)} value={this.state.security_code}/>
                                        <Input required id="alias" s={6} label="Alias" onChange={(e) => this.handleInputChange(e)} value={this.state.alias}/>
                                    </Row>
                                    <Button type="submit" waves='light'>Save</Button>
                                </form>
                                  
                            </Modal>
                            </div>
                          </div>
                          
                        
                      </CardPanel>
                      
          </div>
          )
      }
}
export default CardsContainer;