import React, { Component } from 'react';
import TablaPagos  from './TablaPagos/TablaPagos';
import './Historial.css';
import ErrorBoundary  from './ErrorBoundary';
import  Futer from './Futer/Futer';

class Historial extends Component {

    constructor() {
        super();

        this.state={ startDateList: []
        };

        this.state ={startDate:""};
        this.state ={pago:""};
    }

    handleStartDateChange = event => {
        this.setState ({
            startDate: event.target.value,
        });
    };

    handleFilterChange = (filter) => {
        this.setState({selectedAlarm: filter})
    }

    handleAlarmsChange = (e, index) => {
        let arregloFinal = this.state.todoList; // Extraigo todo el arreglo de todoList
        arregloFinal[index].finalizado = e.target.checked; // Cambiar el status de finalizado en la posicion deseada

        this.setState({ startDate: arregloFinal }); // Cambio mi estado de TodoList con la nueva referencia
    }

    render () {
        let { startDate } = this.state;
        
        let alarmar = (this.state.startDateList||[]).filter(startDate => startDate.alarmado === false).length;


        

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
            <div className="content">
                <h1 className="titulo">Historial</h1>
                <ErrorBoundary>
                    <TablaPagos agendar ={alarmar} filterChange={this.handleFilterChange} startDate={startDate} OnStartDateChange={this.handleStartDateChange}></TablaPagos>
                    <Futer  filterChange={this.handleFilterChange.bind(this)} alarmsChange={this.handleStartDateChange} startDateList={filteredStartDateList} OnStartDateChange={this.handleStartDateChange}  />
                </ErrorBoundary>           
            </div>
        )
    }
}
export default Historial;
