import React, { Component } from 'react';
import { Row, Input, Card, Table, InputBase, Col, Icon } from 'react-materialize';
import AlarmsList from './AlarmsList/AlarmsList';
import ErrorBoundary from './ErrorBoundary';
import Futer from './Futer/Futer';

class HistorialDos extends Component {
    constructor () {
        super();
        this.state = {
            historial: [
                {
                    id: 1,
                    folio: "10786108" ,
                    compañia: "SIAPA" ,
                    clasificación: "Servicios",
                    monto: "$180.00",
                    limite: "01/31/2019",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 2,
                    folio: "7890" ,
                    compañia: "Banamex" ,
                    clasificación: "Tarjetas Bancaria",
                    monto: "$380.00",
                    limite: "01/15/2019",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 3,
                    folio: "1234" ,
                    compañia: "SEARS" ,
                    clasificación: "Tarjetas Departamentales",
                    monto: "$1390.00",
                    limite: "01/10/2019",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 4,
                    folio: "5459" ,
                    compañia: "VIVAerobus" ,
                    clasificación: "Tarjetas Bancarias",
                    monto: "$830.00",
                    limite: "01/08/2019",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 5,
                    folio: "1245780" ,
                    compañia: "Zgas" ,
                    clasificación: "Servicios",
                    monto: "$400.00",
                    limite: "01/3/2019",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 6,
                    folio: "24DA17A010130876" ,
                    compañia: "CFE" ,
                    clasificación: "Servicios",
                    monto: "$290.00",
                    limite: "12/31/2018",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 7,
                    folio: "027-081748" ,
                    compañia: "MegaCable" ,
                    clasificación: "Servicios",
                    monto: "$699.00",
                    limite: "12/24/2018",
                    status: "pagado",
                    alarma: "false"
                },
                {
                    id: 8,
                    folio: "1621" ,
                    compañia: "Liverpool" ,
                    clasificación: "Tarjetas Departamentales",
                    monto: "$167.00",
                    limite: "12/29/2018",
                    status: "pagado",
                    alarma: "false"
                },
                
                {
                    id: 9,
                    folio: "00649777" ,
                    compañia: "Telcel" ,
                    clasificación: "Servicios",
                    monto: "$425.00",
                    limite: "12/08/18",
                    status: "pagado",
                    alarma: "false"
                }
            ],
            dateInput: "",
            selectedAlarm: "all"
        }
        this.handleDoneChange = this.handleDoneChange.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({ dateInput: e.target.value });
        return (
            <div>
                <Row>
                    <Input
                        name='on'
                        type='date'
                        label='Calendariza tu pago'
                    >
                    </Input>
                </Row>
            </div>
        )
    }

    handleAddDate = () => {
        this.setState({
            historial: this.state.historial.concat(
                {
                    id: this.state.list.length + 1,
                    compañia: this.state.historial.compañia,
                    alarma: true
                }
            ),
            dateInput:""
            });
    }

    handleDoneChange = (e, id) => {
        const arregloTemporal = this.state.historial;
        for (let i in arregloTemporal) {
            if (arregloTemporal[i].id === id) {
                arregloTemporal[i].alarmado = e.target.checked;
            }
        }
        this.setState({ historial: arregloTemporal });
    }


    handleAlarmChange = (alarm) => {
        this.setState({ selectedAlarm: alarm });
    }


    
    render() {
    let agendado = Array.isArray(this.state.historial.alarm)&& this.state.historial.alarm (item => !item.alarmado).length;    
    let alarmedHistorial = [];
        switch (this.state.selectedAlarm) {
            case "alarmado":
                alarmedHistorial = this.state.historial.alarm (item => item.alarmado)
                break;
            case "alertado":
                alarmedHistorial = this.state.historial.alarm (item => !item.alarmado)
                break;
            default:
                alarmedHistorial = this.state.historial
    }
   
    return (
        <ErrorBoundary>
            <div>
                <h1>Historial</h1>
                <Card>
                    <Col>
                        <Icon>
                            keyboard_arrow_down
                        </Icon>
                    </Col>
                    <Input 
                        value={this.state.historialInput} 
                        onChange={(e)=>this.handleInputChange(e)}>
                    </Input>
                    <Col onClick={this.handleAddDate}>
                        <Icon>
                            add
                        </Icon>
                    </Col>
                    <AlarmsList change={this.handleDoneChange} list={alarmedHistorial}  />
                    <Table>
                        <tbody>
                            {this.historial}
                        </tbody>
                    </Table>
                    <Futer AlarmChange={this.handleAlarmChange} agendar={agendado} />
                </Card>
            </div>
        </ErrorBoundary>
    )
    }
}

export default HistorialDos;