import React from 'react';
import './Chart.css';
import { HorizontalBar,Line,Pie } from 'react-chartjs-2';


const validCrypto = new Set([
  // "Bitcoin",
  "Ethereum",
  "Ripple",
  "Bitcoin Cash",
  "Tether",
  "Litecoin",
  "EOS",
  "Binance Coin",
  "Stellar"
])





export default class Chart extends React.Component {
  constructor(){
    super();

    // this.chartReference = React.createRef();

    this.state = {
      dataForChart: [],
    }
  }

  
  componentDidMount(){

    let  Graphdata = {}
    let names = []
    let currency = []

    fetch('https://rest.coinapi.io/v1/assets?apikey=4EF2A239-DE2E-479C-B802-5E1B306ACE7E')
    .then((response) => response.json())
    .then((data) => {

      names = []
      currency = []
      
      console.log("log fetch");

      this.setState({
        dataForChart: []
      })
      
      
      data = data.filter((item) => validCrypto.has(item.name))
      console.log(data);
      console.log(data.length);
      
      
        data = data.forEach((element,index) => {
          names.push(element.name)
          currency.push(element.price_usd)
        })


      

      console.log(names);
      console.log(currency);

      Graphdata = {
        labels: names,
        datasets: [{
            label: 'CryptoCurrency',
            data: currency,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        }]
      }

      this.setState({
        dataForChart: Graphdata
      })
      
      
    })
    .catch((error) => {
      console.error('Error:', error);
    })

    
  }

  



  render(){

    return(
      <div className="chart">
     
        <HorizontalBar
          data={this.state.dataForChart}
          width={100}
          height={600}
          options={{ maintainAspectRatio: false }}
        />

      </div>
      
      
    )
  }
}
