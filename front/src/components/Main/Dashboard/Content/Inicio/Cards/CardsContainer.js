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
      _id:'',
      card_number: '',
      security_code:'',
      exp_date_mm:'',
      exp_date_yy:'',
      alias:'',
      cards:[],
      isModalOpen:false,
      isModalEditOpen:false,
      selectedCard_id:'5c7d9a472e3a330464f4c4fe'
    }
  }
 
  componentDidMount(){
    this.GetCardsAPI();
  }

  GetCardsAPI = async() => {
       axios.get('/api/tarjetas')
      .then(response => {
        this.setState({ cards: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

// guarda los cambios en nueva y edicion de card 
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
      console.log(this.state._id);
      console.log(this.state._id === ''? '/api/tarjetas':`/api/tarjetas/${this.state._id}`);
      await  axios.post(this.state._id=== '' ? '/api/tarjetas':`/api/tarjetas/${this.state._id}`,card)
      this.setState({
        isModalOpen: false,
        isModalEditOpen:false
      }) 
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
  
  //Abre modal para nueva card
  handleOpenModal = (x)=>{
    this.clearState();
    this.setState({isModalOpen: true}) 
    var objForm = this.refs.newModal;
    objForm.showModal();
  }

   //Abre modal para editar una card seleccionada
  onUpdateCard = async(x)=>{
    try{
      console.log('entro al editar', x);
      const response = await axios.get(`/api/tarjetas/${x._id}`);
      var result;
      result = response.data[0].fechaVencimiento.split("-"); 
      this.setState({
        isModalOpen: true,
        _id:response.data[0]._id,
        card_number: response.data[0].cuenta,
        security_code:response.data[0].pin,
        exp_date_mm:result[0],
        exp_date_yy:result[1],
        alias:response.data[0].alias,  
        isModalEditOpen: true      
      })
     
      var objForm = this.refs.updateModal;
      objForm.showModal();
     
    }
    catch(error){
      console.error(error);
    }
  }

  clearState=()=>{
    this.setState({
      _id:'',
      card_number: '',
      security_code:'',
      exp_date_mm:'',
      exp_date_yy:'',
      alias:'',        
    })
  }

  onDeleteCard = async(x) =>{
    try{
      await axios.delete(`/api/tarjetas/${x._id}`);
      this.GetCardsAPI();
    }
    catch(error){
      console.error(error);
    }
  }

  closeModals = () =>{
      this.setState({isModalOpen: false}) 
      this.setState({isModalEditOpen: false}) 
  }

 
  onSelectCard = (x)=>{
    this.setState({
      selectedCard_id: x._id
    })
    this.props.action(x._id);
    console.log(this.state.selectedCard_id);
  }

  render(){
    const formita = 
    <form onSubmit={(e)=>this.AddCard(e)}>
      <Row>
            <Input required autoFocus id="card_number" s={6} label="Card Number" placeholder="**** **** **** ****" onChange={(e) => this.handleInputChange(e)}  value={this.state.card_number}/>
            <Input required id="exp_date_mm"  s={3} label="Expiration date" placeholder="MM" onChange={(e) => this.handleInputChange(e)}  value={this.state.exp_date_mm}/> 
            <Input required id="exp_date_yy" s={3} placeholder="YY" onChange={(e) => this.handleInputChange(e)} value={this.state.exp_date_yy} /> 
            <Input required id="security_code" s={3} label="Security Code" placeholder="***" onChange={(e) => this.handleInputChange(e)} value={`${this.state.security_code}`}/>
            <Input required id="alias" s={6} label="Alias" placeholder=" " onChange={(e) => this.handleInputChange(e)} value={this.state.alias}/>
        </Row>
        <Button type="submit" waves='light'>Save</Button>
    </form>;

          return(
          <div>
              <CardPanel className="black-text">
              <div className='divFlex-space-betwwen'>
                <div>
                  <h5>Cards </h5>
                </div>
                <Button  floating className={`${stylesInicio.greenAdd} `} waves='light' icon='add' onClick={()=>this.handleOpenModal()}>  </Button>
              </div>
                <Modal 
                
                 open={this.state.isModalOpen}
                 actions= {
                  <div onClick={()=>this.closeModals()}>
                      <Button flat modal="close" waves="light">Close</Button>
                  </div>
                  }
                  dismissible = "true" 
                  ref="newModal"
                  header='NEW payment method'>
                  <p>We don't share your financial details with the merchant</p>
                  {formita}

               </Modal>
              <div className="divider green-1-light"></div>
              <div className='divFlex-center'>
              <table className='divFlex-space-betwwen'>
                                <tbody>
                                  {this.state.cards.map(x=> {
                                    return(
                                      <tr key={x._id} style={{ backgroundColor: this.state.selectedCard_id === x._id? 'silver': 'white'}} >
                                          {/* <td>
                                          <Button style={{padding: '0px'}} flat  waves='teal'  icon='check'  />
                                          </td> */}
                                          <td onClick= {()=>this.onSelectCard(x)}>
                                              <h6> 
                                                {x.alias} 
                                              </h6>
                                          </td>
                                          <td>
                                          <Button style={{padding: '0px'}} flat  waves='teal'  icon='credit_card' onClick= {()=>this.onUpdateCard(x)}/> 
                                          <Modal
                                              open={this.state.isModalEditOpen}
                                              actions= {
                                                <div onClick={()=>this.closeModals()}>
                                                    <Button flat modal="close" waves="light">Close</Button>
                                                </div>
                                                }
                                                dismissible = "true" 
                                              ref="updateModal"
                                              header='UPDATE a payment method'>
                                              <p>We don't share your financial details with the merchant</p>
                                                {formita}
                                          </Modal>
                                          </td>
                                          <td>
                                              <Button style={{padding: '0px'}} flat  waves='teal'  icon='delete'  onClick= {()=>this.onDeleteCard(x)}/>
                                          </td>
                                      </tr>
                                      )
                                })}
                                </tbody>
                              </table>
              </div>
                             
        </CardPanel>
          </div>
          )
      }

}
export default CardsContainer;