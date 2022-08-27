import React, { useState } from "react";
import FinancialDataOptionsBar from "./FinancialDataOptionsBar";
import { FinancialDataTable } from "./FinancialDataTable";
import FinancialWidget from './FinancialWidget'

const FinancialData = () => {

  const [financialWidget, setFinancialWidget] = useState([
    [
      'AMZN',
      'TIME_SERIES',
      'DAILY'
    ]
  ]);

  function handleCallback(data){
    setFinancialWidget(previousWidgets => [...previousWidgets, data]);
  }

  return (<div>
            <div className="container mx-auto px-4">
              <FinancialDataOptionsBar parentCallback = {handleCallback} />
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8" style={{zIndex: '-1'}}>
                {
                  financialWidget.map((data, key)=>{
                    return (<FinancialWidget className="mb-4" key={key} data={data} />)
                  })
                }
            </div>
            </div>
        </div>);
};

export default FinancialData;
