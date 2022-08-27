import React, { useEffect, useState } from "react";
import FinancialDataOptionsBar from "./FinancialDataOptionsBar";
import FinancialWidget from './FinancialWidget'
import axios from 'axios'

const FinancialData = ({ marketplaceData }) => {
  const [financialWidget, setFinancialWidget] = useState([marketplaceData]);

  useEffect(()=>{
    console.log(financialWidget);
  }, [])

  let customerName = "string"

  async function handleCallback(data){
    setFinancialWidget(previousWidgets => [...previousWidgets, data]);
    const request_data = {
      solutionId: 4,
      customerName: 'string'
    }
    await axios.post('/api/post_request_auth', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN"),
        'endpoint': `${data[0]}/string/`
      },
    }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    });
  }

  return (
            <div className="container mx-auto px-4 w-full">
              <FinancialDataOptionsBar parentCallback = {handleCallback} />
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-8" style={{zIndex: '-1'}}>
                {
                  financialWidget.map((data, key)=>{
                    
                  })
                }
            </div>
            </div>
        );
};

export default FinancialData;
