import React from 'react'
import FinancialWidget from './FinancialWidget'

export const FinancialDataTable = ({data}) => {

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">

      {
        data.map((stock)=>{
          return (<FinancialWidget stock={stock} />)
        })
      }
    </div>
  )
}
