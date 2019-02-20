import React,{ Component }  from 'react';
import { Table, Col, ProgressBar, Row   } from 'react-materialize';
import './TablaPagos.scss';



class TablaPagos extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pagos: [],
            pago: {},
            error:null,
            isLoaded: false

        };
    }


    componentDidMount() {
        fetch('http://mlab.com/databases/bedu_final/collections/api/pagos/:id')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pagos: result.pagos
                    });
                },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }
    
        render() {
            const { error, isLoaded, pagos } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...<Row>
                    <Col s={12}>
                        <ProgressBar />
                    </Col>
                    </Row></div>;
            } else {
                return (
                    <Table>
                        <thead>
                            <tr className="conceptos" >
                                <th data-field="fecha"><Col s={1}>Fecha de Pago</Col></th>
                                <th data-field="id tarjeta"><Col s={1}>Tarjeta</Col></th>
                                <th data-field="total"><Col s={1}>Total</Col></th>
                                <th data-field="servicio ids"><Col s={1}>Id de Servicio</Col></th>
                                <th data-field="servicio cantidad"><Col s={1}>Cantidad de Servicio</Col></th>
                                <th data-field="servicio nombre"><Col s={1}>Nombre de Servicio</Col></th>
                                <th data-field="servicio importe"><Col s={1}>Importe de Servicio</Col></th>
                                <th data-field="servicio tipo"><Col s={1}>Tipo de Servicio</Col></th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagos.map(pago => (
                                <tr key={pago._id} className="registros" id="registros">
                                    <td>{pago.fecha}</td>
                                    <td>{pago.idTarjeta}</td>
                                    <td>{pago.total}</td>
                                    <td>{pago.servicio.ids}</td>
                                    <td>{pago.servicio.cantidad}</td>
                                    <td>{pago.servicio.nombre}</td>
                                    <td>{pago.servicio.importe}</td>
                                    <td>{pago.servicio.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </Table>
                )
            }
        }
    
}
export default TablaPagos;