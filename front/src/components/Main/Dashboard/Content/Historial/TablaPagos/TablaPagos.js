import React,{ Component }  from 'react';
import { Table, Col, Button, Modal } from 'react-materialize';
import Calendario from './Calendario/Calendario';
import FormatoPagar from './FormatoPagar/FormatoPagar';
import './TablaPagos.css';
import  Futer from '../Futer/Futer';


class TablaPagos extends Component {
    
    constructor() {
        super();

        this.state = {
            pagos: [
                {
                    id: 1,
                    folio: "10786108" ,
                    compañia: "SIAPA" ,
                    clasificación: "Servicios",
                    monto: "$180.00",
                    limite: "01/31/2019",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 2,
                    folio: "7890" ,
                    compañia: "Banamex" ,
                    clasificación: "Tarjetas Bancaria",
                    monto: "$380.00",
                    limite: "01/15/2019",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 3,
                    folio: "1234" ,
                    compañia: "SEARS" ,
                    clasificación: "Tarjetas Departamentales",
                    monto: "$1390.00",
                    limite: "01/10/2019",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 4,
                    folio: "5459" ,
                    compañia: "VIVAerobus" ,
                    clasificación: "Tarjetas Bancarias",
                    monto: "$830.00",
                    limite: "01/08/2019",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 5,
                    folio: "1245780" ,
                    compañia: "Zgas" ,
                    clasificación: "Servicios",
                    monto: "$400.00",
                    limite: "01/3/2019",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 6,
                    folio: "24DA17A010130876" ,
                    compañia: "CFE" ,
                    clasificación: "Servicios",
                    monto: "$290.00",
                    limite: "12/31/2018",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 7,
                    folio: "027-081748" ,
                    compañia: "MegaCable" ,
                    clasificación: "Servicios",
                    monto: "$699.00",
                    limite: "12/24/2018",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                {
                    id: 8,
                    folio: "1621" ,
                    compañia: "Liverpool" ,
                    clasificación: "Tarjetas Departamentales",
                    monto: "$167.00",
                    limite: "12/29/2018",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
                
                {
                    id: 9,
                    folio: "00649777" ,
                    compañia: "Telcel" ,
                    clasificación: "Servicios",
                    monto: "$425.00",
                    limite: "12/08/18",
                    status: "pagado",
                    selectedAlarm: "NoAlarmado"
                },
               

            ],
            pago: {},
            
            
               
        }
        
    
    }

    renderCalendario() {
        return (
            <div>
                <Calendario />
            </div>
        )
    }
    render () {
        const { startDate } = this.state
        let listPagos = this.state.pagos.map((pago,index) =>
            <tr key={index} className="registros" id="registros">
                <td>{pago.folio}</td>
                <td>{pago.compañia}</td>
                <td>{pago.clasificación}</td>
                <td>{pago.monto}</td>
                <td>{pago.limite}</td>
                <td>{pago.status}</td>
                <td>
                    <Modal header='Pagar saldo' fixedFooter
                        trigger={<Button floating large id='red' waves='light' icon='payment'></Button>}>
                        <FormatoPagar />
                    </Modal> 
                    <Modal header='Agenda tu proximo pago' fixedFooter
                        trigger={<Button onClick={this.renderCalendario} floating large id='green' waves='light' icon='calendar_today'></Button>}> 
                        <Calendario startDate={startDate} startDateList={filteredStartDateList} OnStartDateChange={this.handleStartDateChange}/>
                        
                    </Modal>
                    <Modal header='Programa alerta de proximo pago' fixedFooter
                        trigger={<Button onClick={this.renderCalendario} floating large id='yellow' waves='light' icon='alarm'></Button>}>
                        <Calendario startDate={startDate} startDateList={filteredStartDateList} OnStartDateChange={this.handleStartDateChange}  />
                        
                    </Modal> 
                </td>
            </tr>
        );

        
        let filteredStartDateList = [];
        
        switch (this.state.selectedAlarm) {
            case 'alarmado':
                filteredStartDateList = this.state.startDateList.filter(startDate => startDate.alarmado);
                break;
            default: {
                filteredStartDateList = this.state.todoList;
            } 
        }
        
  
        return (
            <div>
                <Table>
                    <thead>
                        <tr className="conceptos" >
                            <th data-field="folio"><Col s={1}>Numero de cuenta</Col></th>
                            <th data-field="compañia"><Col s={1}>Compañia</Col></th>
                            <th data-field="clasificación"><Col s={1}>Clasificacion de Pagos</Col></th>
                            <th data-field="monto"><Col s={1}>Monto</Col></th>
                            <th data-field="limite"><Col s={1}>Fecha limite de pago</Col></th>
                            <th data-field="status"><Col s={1}>Status</Col></th>
                            <th data-field="acciones"><Col s={1}>Acciones</Col></th>
                        </tr>
                    </thead>
                    <tbody key={this.state.index} >
                        {listPagos}   
                    </tbody> 
                    
                </Table>
            </div>
        )
    }
}
export default TablaPagos;