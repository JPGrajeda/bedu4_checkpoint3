import React from 'react';
import { Button, Row, Col, Input, Modal, Icon}from "react-materialize";

class DialogCard extends React.Component {
  constructor(props){
    super(props);
    this.state= {
        card : {
            _id:"",
            cuenta: "",
            pin:0,
            fechaVencimiento:"",
            alias:"",
        }
    }
  }
 
  

  clearInputs = ()=>{
    this.setState({
        _id:"",
        cuenta: "",
        pin:0,
        fechaVencimiento:"",
        alias:""
    });
  }

  handleClose = () => {
    this.clearInputs();
  }

  handleClickAddUser = () => {
    this.clearInputs();
  }

  render() {
     return (
      <div>
        <Modal
            header='Modal Header'
            trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
        </Modal>
      </div>
    );
  }
}

export default  DialogCard