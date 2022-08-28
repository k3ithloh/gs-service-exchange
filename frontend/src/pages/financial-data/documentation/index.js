import React, {useState} from 'react'
import { DocumentationRow } from '../../../components/Financial-data/DocumentationRow';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/index/navbar';
import axios from 'axios';

const index = ({ serviceData }) => {

  const [api, setApi] = useState([{
    url: 'https://api.gsserviceexchange.online/api/Stock/TIME_SERIES/DAILY/${EquityName}',
    title: "Equities"
  },
  {
    url: 'https://api.gsserviceexchange.online/api/Stock/FX/DAILY/${ForexName}',
    title: "Forex"
  },
  {
    url: 'https://api.gsserviceexchange.online/api/Stock/DIGITAL_CURRENCY/DAILY/${CryptoName}',
    title: 'Crypto'
  }
  ]);

  const hero = (serviceData) => {
    console.log(serviceData.serviceTitle)
    return (
      <div className="flex bg-grey_100 px-44 py-20 place-items-center place-content-around">
        <div className="w-3/5 space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-dark_blue">{serviceData.serviceTitle}</h1>
            <h2 className="text-2xl font-semibold text-grey_600">{serviceData.category}</h2>
          </div>
          <p className="text-xl font-light">
            {serviceData.description}
          </p>
          <div className="flex space-x-5">
            <p className="font-fold text-2xl">You purchased this service on 28/08/2022</p>
          </div>
        </div>
        <div className="relative w-2/5 h-128">
          <Image alt="service" src="/images/financial_dashboard.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    )
  }
  

  return (
    <div>
      <Navbar/>
      {hero(serviceData)}
      <div className="flex justify-center mx-44 mt-10">
        <Link href="/financial-data/overview">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
            <h3 className="text-grey_400 text-center text-3xl">Overview</h3>
            <a className="w-56 h-1 border-transparent border flex-grow"></a>
          </button>
        </Link>
        <Link href="/financial-data/documentation">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
            <h3 className="font-semibold text-dark_blue text-center text-3xl">Documentation</h3>
            <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
          </button>
        </Link>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44"></div>
      <div className='flex flex-col justify-center mx-44 my-20 space-y-20'>
        <div className='space-y-8'>
          <h3 className='text-3xl text-blue font-semibold'>
            Getting Started
          </h3>
          <p className='text-xl font-light'>
            In this 10-minute quickstart, you'll use the GSX API to get the latest price of asset classes. Feel free to follow along this tutorial or use the provided dashboard in <span className='font-semibold'>Overview</span>.
            For a comprehensive view of available APIs, do head over to <Link href="https://api.gsserviceexchange.online/#Stock/"><a className='text-blue'>our API documentation page</a></Link>.
          </p>
          <h3 className='text-3xl text-blue font-semibold'>
            API Endpoints
          </h3>
          <p className='text-xl font-light'>
            Generally, the API request can be broken down into the <span className='text-dark_blue'>asset class</span>, <span className='text-dark_blue'>ticker symbol</span>, and <span className='text-dark_blue'>time horizon</span>.
            We'll run throw a few examples of how to query common combinations of these parameters so that you can easily integrate our data service into your application.
          </p>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Equities
          </h4>
          <p className='text-xl font-light'>
            We support all equities on public stock exchanges, including NYSE, NASDAQ and LSE.
            For equities, we apply the following parameters:
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>Asset Class: </span>TIME_SERIES</li>
            <li className='font-light text-lg'><span className='italic'>Time Interval: </span>DAILY or WEEKLY or MONTHLY</li>
            <li className='font-light text-lg'><span className='italic'>Symbol: </span>EQUITY_NAME</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/TIME_SERIES/${TIME_INTERVAL}/${EQUITY_NAME} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/TIME_SERIES/daily/aapl -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Forex
          </h4>
          <p className='text-xl font-light'>
            We support all forex pairs on public markets.
            For forex, we apply the following parameters:
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>Asset Class: </span>FX</li>
            <li className='font-light text-lg'><span className='italic'>Time Interval: </span>DAILY or WEEKLY or MONTHLY</li>
            <li className='font-light text-lg'><span className='italic'>Symbol: </span>ForexName</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/FX/${TIME_INTERVAL}/${ForexName} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/FX/daily/AED -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Crypto
          </h4>
          <p className='text-xl font-light'>
            We support most Crytocurrencies available on large exchanges.
            For Cryptocurrencies, we apply the following parameters:
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>Asset Class: </span>DIGITAL_CURRENCY</li>
            <li className='font-light text-lg'><span className='italic'>Time Interval: </span>DAILY or WEEKLY or MONTHLY</li>
            <li className='font-light text-lg'><span className='italic'>Symbol: </span>CryptoName</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/DIGITAL_CURRENCY/${TIME_INTERVAL}/${CryptoName} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/DIGITAL_CURRENCY/daily/btc -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
  const serviceData = await axios.get('https://api.gsserviceexchange.online/api/service/14', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    }
  }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    }
  );
  return {
    props: {
      serviceData,
    }
  }
}

export default index