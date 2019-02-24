import React,{ Component }  from 'react';
import { Table, Col } from 'react-materialize';
import axios from 'axios';

import NavBar from '../../../Landingpage/Navbar/Navbar';
import './TablaPagos.css';





class TablaPagos extends Component {
    
constructor(props) {
    super(props);
    this.state = {
      pagos:[],
      
    };
   
}



    async componentDidMount() {
        axios.get("http://localhost:3000/api/pagos")
            .then(res => {
                const pagos = res.data;
                this.setState({pagos});
            })    

    };


  render() {
    let res = Array.isArray(this.state.pagos) && this.state.pagos.map(pago => {
        return (
            <div className="tbl-content">
                <Table  className="table" cellPadding="0" cellSpacing="0" border="0">
                    <tbody className="scrolling-wrapper-flexbox">
                        <tr  key={pago._id.toString()}>
                            <td>{pago.fecha}</td>
                            <td>{pago.id_tarjeta}</td>
                            <td>{pago.total}</td>
                            <td>{pago.servicio.cantidad}</td>
                            <td>{pago.servicio.nombre}</td>
                            <td>{pago.servicio.importe}</td>
                            <td>{pago.servicio.tipo}</td>
                        </tr> 
                    </tbody>
                </Table>
            </div>
        )
    })
    


    return (
        <div>
            <NavBar ></NavBar>
                <section className="section">
                    <h1>HISTORIAL</h1>
                    <div className="scrollmenu">
                        <div className="tbl-header">
                            <Table className="table" cellPadding="0" cellSpacing="0" border="0">

                                <thead >
                                    <tr className="scrolling-wrapper-flexbox">
                                        <th data-field="fecha"><Col s={1}>Fecha de Pago</Col></th>
                                        <th data-field="id tarjeta"><Col s={1}>Tarjeta</Col></th>
                                        <th data-field="total"><Col s={1}>Total</Col></th>
                                        <th data-field="servicio cantidad"><Col s={1}>Cantidad de Servicio</Col></th>
                                        <th data-field="servicio nombre"><Col s={1}>Nombre de Servicio</Col></th>
                                        <th data-field="servicio importe"><Col s={1}>Importe de Servicio</Col></th>
                                        <th data-field="servicio tipo"><Col s={1}>Tipo de Servicio</Col></th>
                                    </tr>
                                </thead>
                            </Table>    
                        </div>
                        <div>
                            {res}   
                        </div> 
                    </div>           
                
                </section>
        </div>
       

    );
  }

}


export default TablaPagos;

//background-color: rgba(69, 179, 156, 1);