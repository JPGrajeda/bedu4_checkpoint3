import React, { Component } from 'react';
import { Table, Col, Row, Button, Modal, DatePicker } from 'react-materialize';
import './TablaPagos.css';


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
                },
                {
                    id: 2,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                },
                {
                    id: 3,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                },
                {
                    id: 4,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                },
                {
                    id: 5,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                },
                {
                    id: 6,
                    folio: "11111" ,
                    compañia: "22222" ,
                    clasificación: "44444",
                    monto: "55555",
                    limite: "666666",
                    status: "pagado"
                },
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
            pago: {},
            startDate: new Date()
               
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handlePagar = () => {
        alert('clicked');
        return false;
        
        
    }

    handleAlarma = () => {
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
        />
    
        
    }

    handleAgendar = () => {
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            />
        );
        
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
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
                    <Button onClick={this.handlePagar}floating large className='red' waves='light' icon='payment'/>
                    <Button onClick={this.handleAgendar}floating large className='green' waves='light' icon='calendar_today' />
                    <Button onClick={this.handleAlarma}floating large className='yellow' waves='light' icon='alarm'/>
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