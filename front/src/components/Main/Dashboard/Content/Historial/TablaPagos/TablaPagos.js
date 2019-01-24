import React, { Component } from 'react';
import { Table, Col, Row, Input } from 'react-materialize';
import './TablaPagos.css';
import Pagar from './Botones/Pagar';
import Agendar from './Botones/Agendar';
import Alerta from './Botones/Alerta';


class TablaPagos extends Component {
    
    constructor() {
        super();

        this.state = {
            pagos: [
                {
                    id: 1,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                }
            ],
            pago: {}
               
        }

    }

    render () {
        let listPagos = this.state.pagos.map((pago) =>
            <tr key={pago.toString()}>
                <td>{pago.id}</td>
                <td>{pago.folio}</td>
                <td>{pago.compañia}</td>
                <td>{pago.clasificación}</td>
                <td>{pago.monto}</td>
                <td>{pago.limite}</td>
                <td>{pago.status}</td>
                <td>
                    <Input s={1} type='select' label="¿Que deseas hacer?" defaultValue='2'>
                        <option><Pagar/></option>
                        <option><Agendar/></option>
                        <option><Alerta/></option>
                    </Input>
                </td>
            </tr>
        );
  

        return (
            <div>
                <Table>
                    <thead>
                        <tr className="conceptos">
                            <th data-field="id"><Col s={1}>ID</Col></th>
                            <th data-field="folio"><Col s={1}>Numero de cuenta</Col></th>
                            <th data-field="compañia"><Col s={1}>Compañia</Col></th>
                            <th data-field="clasificación"><Col s={1}>Clasificacion de Pagos</Col></th>
                            <th data-field="monto"><Col s={1}>Monto</Col></th>
                            <th data-field="limite"><Col s={1}>Fecha limite de pago</Col></th>
                            <th data-field="status"><Col s={1}>Status</Col></th>
                            <th data-field="acciones"><Col s={1}>Acciones</Col></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPagos}   
                    </tbody> 
                    
                </Table>
            </div>
        )
    }
}
export default TablaPagos;