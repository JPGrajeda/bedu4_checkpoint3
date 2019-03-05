import React, {Component} from 'react';

import { Table, CardPanel, Row } from 'react-materialize';
import axios from 'axios';

class History extends Component{
    constructor(props) {
        super(props);
        this.state = {
          pagos: [],
        };
       
    }

    async componentDidMount() {
        axios.get("/api/pagos")
            .then(res => {
                const pagos = res.data;
                this.setState({pagos});
            })    

    };

    render(){

        console.log('history: ', this.state);
        let res = this.state.pagos.map( (pago, index) => {
            return (
                    <> 
                        { 
                            pago.servicio.map( (servicio, i) => {
                                return <tr>
                                         <td>{pago._id}</td>
                                         <td>{pago.id_tarjeta}</td>
                                         <td>$ {pago.total}</td>
                                         <td className='txt-center'>{servicio.cantidad}</td> 
                                         <td>{servicio.nombre}</td>
                                         <td>$ {servicio.importe}</td>
                                         <td>{servicio.tipo}</td>
                                       </tr>
                            })
                        }
                    </>
                   )
        })


        return (
            <div>
                {/* <NavbarTablaPagos ></NavbarTablaPagos> */}
                    <section className="section">

                    <CardPanel className="grey lighten-3 black-text">
                        <Row className='m-0'>
                            <h5 className='ft-bold'>HISTORIAL</h5>
                            <div className="divider green-1-light"></div>
                            <br/>

                            <div className="scrollmenu">
                                <div className="tbl-header">
                                    <Table className="table" responsive bordered striped>
                                        <thead >
                                            <tr className="scrolling-wrapper-flexbox">
                                                <th>Referencia pago</th>
                                                <th>Tarjeta</th>
                                                <th>Total</th>
                                                <th>Cantidad de Servicio</th>
                                                <th>Nombre de Servicio</th>
                                                <th>Importe de Servicio</th>
                                                <th>Tipo de Servicio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {res} 
                                        </tbody>
                                    </Table>    
                                </div>
                            </div>      

                        </Row>
                    </CardPanel>

                    
                    </section>
            </div>
           
    );

    }

}

export default History;