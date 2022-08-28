import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const FinancialWidget = (props) => {

  const API_KEY = "ZXC9PLPBQPNDW0GR"
  
  const [chartXvalues, setChartXvalues] = useState([]);
  const [chartYvalues, setChartYvalues] = useState([]);
  const [label, setLabel] = useState();
  const stock = props.data.ticker;
  const securityType = props.data.stockType;
  const timeRange = props.data.interval;

  useEffect(()=>{
    let url = "";
    if (securityType == "FX"){
      url = `https://www.alphavantage.co/query?function=FX_${timeRange}&from_symbol=${stock}&to_symbol=USD&outputsize=compact&apikey=${API_KEY}`;
      setLabel(`Forex: ${timeRange} range of ${stock} to USD`)
    } else if (securityType == "DIGITAL_CURRENCY"){
      url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_${timeRange}&symbol=${stock}&market=USD&outputsize=compact&apikey=${API_KEY}`;
      setLabel(`Cryptocurrency: ${timeRange} range of ${stock}`)
    } else {
      url = `https://www.alphavantage.co/query?function=TIME_SERIES_${timeRange}&symbol=${stock}&outputsize=compact&apikey=${API_KEY}`;
      setLabel(`Equity: ${timeRange} range of ${stock}`)
    }
    
    let yValues = [];
    let xValues = [];
    fetch(url)
      .then(
        function(response){
          return response.json();
        }
      )
      .then(data =>{
        const getDataKey = Object.keys(data)[1]
        for (var key in data[getDataKey]) {
          xValues.push(key);
          yValues.push(data[getDataKey][key]["1. open"])
        }

        setChartXvalues(xValues.reverse());
        setChartYvalues(yValues.reverse());
      })
  }, [])

  return (
    <div className="rounded-lg border border-black text-center p-4">
      <Line
        datasetIdKey='id'
        data={{
          labels: chartXvalues,
          datasets: [
            {
              label: label,
              id: 1,
              data: chartYvalues,
              backgroundColor: 'rgb(60, 118, 159)',
              borderColor: 'rgb(60, 118, 159)',
            }
          ],
        }}
      />
    </div>
  )
}

export default FinancialWidget