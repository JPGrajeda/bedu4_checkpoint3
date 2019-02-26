import React, { Component } from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

import axios from 'axios';

// components materialize
import {Row, Col, CardPanel } from 'react-materialize';

// const data = {
//     labels: ['Telcel', 'SIAPA', 'CFE', 'Sears', 'Netflix', 'June', 'Xbox'],
//     datasets: [
//       {
//         label: 'Gráfica de Servicios con Mayor Gasto',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//         hoverBorderColor: 'rgba(255,99,132,1)',
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };



  const dataPie = {
	labels: [
		'Servicios Públicos',
		'Tarjetas Departamentales',
        'Servicios Web',
        'Videojuegos'
	],
	datasets: [{
		data: [300, 150, 100,50],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#64FE2E'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#64FE2E'
		]
	}]
};

const dataLine = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Historico',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 50, 62, 80, 60, 100]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
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
            label: 'Gráfica de Servicios con Mayor Gasto',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      }

    }


    async componentDidMount() {
      let tipo = await axios.get('/api/pagosTipo');
      let labels = [];
      let importe = [];

      tipo.data.map((data) => {
        return labels.push(data._id);
      });

      tipo.data.map((data) => {
        return importe.push(data.importe);
      });

      this.setState( prevState => ({
        data: {
          ...this.state.data,
          labels: labels,
          datasets: [
            {
              ...this.state.data.datasets[0],
              data: importe,
            }
          ]
        }
      }))
      
    }


    render(){
      console.log(this.state);
        return(
            <>
                    <Row>
                        <Col m={6}> 
                            <CardPanel className="green-1-light black-text">
                                < Pie 
                                    data={dataPie}
                                    options={options}
                                    height={200}
                                    width={600}
                                />
                            </CardPanel>
                        </Col>
                        <Col m={6}>
                            <CardPanel className="green-1-light black-text">
                                < Bar 
                                    data={this.state.data}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                    height={200}
                                />
                            </CardPanel>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col m={12}>
                            <CardPanel className="green-1-light black-text">
                                <Line 
                                        data={dataLine}
                                        height={80}
                                />
                            </CardPanel>
                         </Col>
                    </Row>
            </>
            )
        }
}

export default Graphics;