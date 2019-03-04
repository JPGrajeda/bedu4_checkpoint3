import React,{ Component }  from 'react';
import { Table, Col } from 'react-materialize';
import axios from 'axios';    


return    
            <td>{pago.fecha}</td>
            <td>{pago.id_tarjeta}</td>
            <td>{pago.total}</td>
            <td>{pago.servicio.cantidad}</td>
            <td>{pago.servicio.nombre}</td>
            <td>{pago.servicio.importe}</td>
            <td>{pago.servicio.tipo}</td>
        
        
        
class  PagosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pagos: props.pagos
          
        };
       
    }
    const pagos = props.pagos;
    const listItems = pagos.map((pago) => {
    
        <ListItem key={pago.toString()} value={number}
        />
    )
    
    render() {
    
        return (

        <tr tabIndex="0"  key={pago._id.toString()} id={pago._id} value={pago} >
            {listItems}  
        </tr>     
            
            
            
            
            
           
    );
}}

export default PagosList;


