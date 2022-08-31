import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { suggestions } from './constants';
import axios from 'axios'

const FinancialDataOptionsBar = (props) => {

  const [stock, setStock] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [securityType, setSecurityType] = useState("original");
  const [timeRange, setTimeRange] = useState("original");
  const [suggestion, setSuggestions] = useState([]);

  function filterStockOptions(value){
    setStock(value);
    let userData = value;
    const searchWrapper = document.querySelector(".search-input");
    var array = [];
    if (userData){
      array = suggestions[securityType].filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
      })
    }
    checkToShowSuggestions(array);
  }

  function setStockName(name){
    setStock(name);
  }

  function checkToShowSuggestions(list){
    const suggBox = document.getElementById("box")
    let listData;
    if (list.length <= 0){
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
      setSuggestions(previous => [...list])
    }
  }

  async function search(){
    const data = [stock, securityType, timeRange]

    props.parentCallback(data);
    await axios.post('/api/post_request_auth', {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN"),
        'endpoint': `CustomerStock/${data[0]}/string/${data[2]}/${data[1]}`
      },
    }).then(res => {
      props.success(true);
    }).catch(err => {
      if (err.response.data.status == 409){
        props.success("conflict")
      }
    });
    setStock();
    setSecurityType("original");
    setTimeRange("original");
  }

  return (
    <div className='w-full flex justify-between mt-5' style={{zIndex: '1'}}>
      <div>
        <div className="block text-gray-700 text-sm font-bold my-auto" htmlFor="password">
          Asset Class
        </div>
        <select id="countries" className="rounded-xl w-full p-3 border border-blue" value={securityType} onChange={({target})=>setSecurityType(target?.value)}>
          <option value="original">Choose the asset class</option>
          <option value="TIME_SERIES">Equities</option>
          <option value="FX">Forex</option>
          <option value="DIGITAL_CURRENCY">Crypto</option>
        </select>
      </div>
      
      <div className='wrapper'>
        <div className="block text-black text-sm font-bold my-auto" htmlFor="search">
          Search Ticker
        </div>
        <div className={showSuggestions ? 'search-input active' : 'search-input'}>
          <input type="text" id="stock" placeholder='Type to search..' value={stock} onChange={({target})=>filterStockOptions(target?.value)}/>
          <div className='autocom-box' id="box">
            {
              suggestion.map((data, key)=>{
                return (<li key={key} onClick={()=>setStockName(data)} value={data} style={{cursor:'pointer'}}>{data}</li>)
              })
            }
          </div>
          <div className='icon'><i className='fas fa-search'></i></div>
        </div>
      </div>

      <div>
        <div className="block text-gray-700 text-sm font-bold my-auto" htmlFor="password">
          Time In
        </div>
        <select id="countries" className="rounded-xl w-full p-3 border border-blue" value={timeRange} onChange={({target})=>setTimeRange(target?.value)}>
          <option value="original">Choose the time in</option>
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
        </select>
      </div>
      
      <div className="my-auto mt-5">
        <button onClick={()=>search()} className="w-full rounded-xl bg-blue py-3 px-5 font-semibold text-white hover:bg-dark_blue text-lg">
          Add Widget
        </button>
      </div>
    </div>
  )
}

export default FinancialDataOptionsBar