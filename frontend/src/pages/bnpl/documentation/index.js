import Navbar from "../../../components/index/navbar";
import Footer from "../../../components/index/footer";
import { DocumentationRow } from '../../../components/Financial-data/DocumentationRow';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

function service({ serviceData }) {
  const hero = (serviceData) => {
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
          <Image alt="service" src="/images/products.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      {hero(serviceData)}
      <div className="flex justify-center mx-44 mt-10">
        <Link href="/bnpl/overview">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
              <h3 className="text-grey_400 text-center text-3xl">Overview</h3>
              <a className="w-56 h-1 border-transparent border flex-grow"></a>
          </button>
        </Link>
        <Link href="/bnpl/documentation">
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
            In this 10-minute quickstart, you'll use the GSX API to integrate our BNPL service into your application. This will allow you to offer BNPL services to your customers fast, seamlessly and most importantly, securely.
            Feel free to follow along this tutorial or use the provided dashboard in <span className='font-semibold'>Overview</span>.
            For a comprehensive view of available APIs, do head over to <Link href="https://api.gsserviceexchange.online/#User/"><a className='text-blue'>our API documentation page</a></Link>.
          </p>
          <h3 className='text-3xl text-blue font-semibold'>
            API Endpoints
          </h3>
          <p className='text-xl font-light'>
            There are 3 main endpoints that you'll interact with: <span className='text-dark_blue'>/User</span>, <span className='text-dark_blue'>/UserPayment</span>, and <span className='text-dark_blue'>/UserPurchase</span>.
            These endpoints will allow you to create, update, and delete users, payments, and purchases.
          </p>
        </div>


        <div className='space-y-8'>
          <h4 className="text-2xl font-bold text-white w-full rounded-lg bg-dark_blue p-4">/Users</h4>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Get all users
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to retrieve all your users' information.
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>customerName: </span>Your username</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/User/${CUSTOMER_NAME} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/User/username -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Create user
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to create a new user and a new purchase record.
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>userId: </span>User ID</li>
            <li className='font-light text-lg'><span className='italic'>customerName: </span>Your Username</li>
            <li className='font-light text-lg'><span className='italic'>createdDate: </span>Current Datetime</li>
            <li className='font-light text-lg'><span className='italic'>userPurchases: </span>Array containing purchase information</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X POST https://api.gsserviceexchange.online/api/User -H "Authorization: Bearer xxxxx" -d \'{"userId": ${USER_ID}, "customerName": ${CUSTOMER_NAME}, "createdDate": ${CURRENT_DATETIME}, "userPurchases": ${$USER_PURCHASES}}\'', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/Stock/FX/daily/AED -d \'{"userId": 234578, "customerName": "username", "createdDate": "2022-08-28T06:49:37.435Z", "userPurchases": []}\' -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Get purchases by user
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to retrieve purchases by individual users.
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>userId: </span>User ID</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/User/${USER_ID} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/User/234578 -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className="text-2xl font-bold text-white w-full rounded-lg bg-dark_blue p-4">/UserPayment</h4>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Get users' payments by payment ID
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to retrieve all payments belonging to a specific purchase.
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>purchaseId: </span>Purchase ID of customer</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/UserPayment/payment/${PURCHASE_ID} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/UserPayment/payment/22222 -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className="text-2xl font-bold text-white w-full rounded-lg bg-dark_blue p-4">/UsersPurchase</h4>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Get details of a purchase by purchase ID
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to retrieve all details of a specific purchase ID
          </p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>purchaseId: </span>Purchase ID of customer</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/UserPurchase/${PURCHASE_ID} -H "Authorization: Bearer xxxxx"', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X GET https://api.gsserviceexchange.online/api/UserPurchase/22222 -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className='text-2xl text-dark_blue font-semibold'>
            Create a purchase record
          </h4>
          <p className='text-xl font-light'>
            Use this endpoint to create a new purchase record.   
          </p>
          <p className="font-bold">This endpoint should only be used in Production as each request is attached with a purchase contract for credit between you and Goldman Sachs.</p>
          <ul className='ml-10'>
            <li className='font-light text-lg'><span className='italic'>purchaseId: </span>Purchase ID of customer</li>
            <li className='font-light text-lg'><span className='italic'>customerName: </span>Your Username</li>
            <li className='font-light text-lg'><span className='italic'>purchaseDate: </span>Current Datetime</li>
            <li className='font-light text-lg'><span className='italic'>userId: </span>Your user's ID</li>
            <li className='font-light text-lg'><span className='italic'>amount: </span>Amount to be credited</li>
            <li className='font-light text-lg'><span className='italic'>numberOfPayments: </span>Desired number of payback payments</li>
          </ul>
          <div className='space-y-20'>
            <DocumentationRow data={{url:'curl -X POST https://api.gsserviceexchange.online/api/UserPurchase -H "Authorization: Bearer xxxxx" -d \'{"purchaseId": ${PURCHASE_ID}, "customerName": ${CUSTOMER_NAME}, "purchaseDate": ${CURRENT_DATETIME}, "userId": ${USER_ID}, "amount": ${AMOUNT}, "numberOfPayments": ${NUMBER_OF_PAYMENTS}}\'', title: "Template Request"}} />
            <DocumentationRow data={{url:'curl -X POST https://api.gsserviceexchange.online/api/UserPurchase -d \'{"purchaseId": 234578, "customerName": "username", "purchaseDate": "2022-08-28T06:49:37.435Z", "userId": 203489, "amount": 200, "numberOfPayments": 3}\' -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJ1c2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoicmFpbmJvdy11bmljb3JuLWN1c3RvbWVyIiwiZXhwIjoxNjYxNzA5OTg4fQ.0HOpHLFJtKzXUh7MZg4tVED6d_geP-kcRF-9H-zzWmJG1u20qYKeyZitE6xEBfqBVx3dtM0uR3OTU-L2hUNeYQ"',
              title: "Example Request"}} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
  const serviceData = await axios.get('https://api.gsserviceexchange.online/api/service/13', {
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

export default service;