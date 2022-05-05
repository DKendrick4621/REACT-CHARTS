import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [75],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                  show: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                   hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#13bbd1',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#0f0f0f',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: true,
                      color: '#1227e3',
                      fontSize: '17px'
                    },
                    value: {
                      formatter: function(val) {
                        return parseInt(val);
                      },
                      color: '#ab13d1',
                      fontSize: '36px',
                      show: true,
                    }
                  }
                }
              },
              colors: ['#6328c9'],
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#d11313'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Percent'],
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="card">
  <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>
</div>
    

          );
        }
      }