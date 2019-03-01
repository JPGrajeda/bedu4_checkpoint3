import React, { Component } from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

import axios from 'axios';

// components materialize
import {Row, Col, CardPanel } from 'react-materialize';


  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        boxWidth: 10
      }
    }
  }

class Graphics extends Component {

    state = {

      data : {
        labels: [],
        datasets: [
          {
            label: 'Gastos de servicios',
            backgroundColor: [],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: [],
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      },

      dataPie : {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#64FE2E' ],
          hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56','#64FE2E']
        }]
      }

    }

    getServicio = async (_idT) => {
      let tipo = await axios.get(`/api/pagosServicio/${_idT}`);
      let labels = [];
      let importe = [];
      let colors = [];

      tipo.data.map((data) => {
        return labels.push(data._id);
      });

      tipo.data.map((data) => {
        return importe.push(data.importe);
      });

      tipo.data.map((data) => {
        return colors.push( '#'+Math.floor(Math.random()*16777215).toString(16) );
      });

      this.setState( prevState => ({
        data: {
          ...this.state.data,
          labels: labels,
          datasets: [
            {
              ...this.state.data.datasets[0],
              backgroundColor: colors,
              hoverBackgroundColor: colors,
              data: importe
            }
          ]
        }
      }));
    }

    getTipo = async (_idT) => {
      let tipo = await axios.get(`/api/pagosTipo/${_idT}`);
      let labels = [];
      let importe = [];
      let colors = [];

      tipo.data.map((data) => {
        return labels.push(data._id);
      });

      tipo.data.map((data) => {
        return importe.push(data.importe);
      });    

      tipo.data.map((data) => {
        return colors.push( '#'+Math.floor(Math.random()*16777215).toString(16) );
      });
       
      this.setState( prevState => ({
        dataPie: {
          labels: labels,
          datasets: [
            {
              data: importe,
              backgroundColor: colors,
              hoverBackgroundColor: colors
            }
          ]
        }
      }));
    }

    componentDidMount() {
      // this.getServicio('5c79762b0d41c7309421dae2');
      // this.getTipo('5c79762b0d41c7309421dae2');      
      // console.log('props graficas: ',this.props);    
    }

    /* Se ejecuta cuando hay cambios*/
    componentWillReceiveProps(next_props){
      this.getTipo(next_props.dataT);
      this.getServicio(next_props.dataT);
    }


    render(){ 
        
        const isData = this.state.dataPie.labels;
        let chartPie, chartBar ;
        if (isData.length > 0){
          chartPie = < Pie 
                          data={this.state.dataPie}
                          options={options}
                          height={200}
                          width={600}
                      />
          chartBar = < Bar 
                          data={this.state.data}
                          options={{
                              maintainAspectRatio: false
                          }}
                          height={200}
                      />
        }else{
          chartPie = chartBar = <label>asdasd</label>;
        }
        

        return(
            <>
                    <Row>
                        <Col m={6}> 
                            <CardPanel className="green-1-light black-text">
                                {chartPie}
                            </CardPanel>
                        </Col>
                        <Col m={6}>
                            <CardPanel className="green-1-light black-text">
                                {chartBar}
                            </CardPanel>
                        </Col>
                        
                    </Row>
            </>
            )
        }
}

export default Graphics;