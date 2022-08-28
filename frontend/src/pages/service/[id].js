import Navbar from "../../components/index/navbar";
import Footer from "../../components/index/footer";
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

function service({ serviceData }) {
  const [serviceId, setServiceId] = useState(serviceData.serviceId);
  const router = useRouter();
  
  async function subscribe(){
    const data = {
      serviceId: serviceId,
      customerName: 'string'
    }
    await axios.post('/api/post_request_auth', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN"),
        'endpoint': 'ServiceCustomer'
      },
    }).then(res => {
      console.log(res.data);
      if (serviceId === 14) {
        router.push('/financial-data/overview');
      }
    }).catch(err => {
      console.log(err);
      if (serviceId === 14) {
        router.push('/financial-data/overview');
      }
    });
  }

  const handleClick = (event) => {
    event.preventDefault();
    subscribe();
  };
  
  const hero = (serviceData) => {
    return (
      <div className="flex bg-grey_100 px-44 py-40">
        <div className="w-3/5 space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-dark_blue">{serviceData.serviceTitle}</h1>
            <h2 className="text-2xl font-semibold text-grey_600">{serviceData.category}</h2>
          </div>
          <p className="text-xl font-light">
            {serviceData.description}
          </p>
          <div className="flex space-x-5">
            <button className="w-72 rounded-xl bg-blue p-3 font-semibold text-white hover:bg-dark_blue text-3xl">
              <div className="flex space-x-5 place-content-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                <a>Watch Demo</a>
              </div>
            </button>
            <button onClick={handleClick} className="w-72 rounded-xl bg-green p-3 font-semibold text-white hover:opacity-80 text-3xl">
              Get It Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar/>
      {hero(serviceData)}
      <div className="bg-pale_blue_100 px-44 py-20">
        <div className="flex justify-between divide-x divide-green">
            {/* <h3 className="text-2xl font-semibold text-dark_blue">ser</h3> */}
            {serviceData.features.map((feat, index) => {
              return (
                <div key={index} className="px-10 w-1/3">
                  <h3 className="text-3xl font-semibold text-dark_blue text-center">{feat.featureTitle}</h3>
                  <p className="text-xl font-light text-center">{feat.description}</p>
                </div>
              )
            })}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mx-44 flex flex-col pt-20 w-1/5 items-center content-center self-center space-y-4">
            <h3 className="font-semibold text-dark_blue text-center text-3xl">Reviews</h3>
            <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
        </div>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44">
      </div>
      <div className="flex mx-44 my-20 shadow-md shadow-grey_400 rounded-lg w-4/5 py-20 divide-x divide-grey_200 justify-between">
        <div className="w-1/3 px-10 space-y-2">
          <div className="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="w-48 bg-green"></div>
            <p className="font-light">100%</p>
          </div>
          <div className="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="w-48 bg-green"></div>
            <p className="font-light">100%</p>
          </div>
          <div className="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="w-48 bg-grey_400"></div>
            <p className="font-light">0%</p>
          </div>
          <div className="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="w-48 bg-grey_400"></div>
            <p className="font-light">0%</p>
          </div>
          <div className="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="w-48 bg-grey_400"></div>
            <p className="font-light">0%</p>
          </div>
        </div>
        <div className="w-1/3 px-10 flex place-items-center place-content-around justify-center justify-items-center space-x-10">
          <div className="space-y-2">
            <div className="flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <h4 className="text-2xl text-grey_600">15 Reviews</h4>
          </div>
          <div>
            <h3 className="text-6xl font-semibold text-center">5.0</h3>
            <p className="text-2xl text-grey_400 font-light text-center">Average Rating</p>
          </div>
        </div>
        <div className="w-1/3 px-10 flex flex-col place-content-center place-items-center space-y-4">
          <p className="w-2/3 text-2xl text-grey_600 text-center">Share your experiences with everyone</p>
          <button className="rounded-xl bg-blue p-3 font-semibold text-white hover:bg-dark_blue text-2xl">
            Write a Review
          </button>
        </div>

      </div>
      <div className="flex justify-between mx-44 my-20">
        <div className="shadow-md shadow-grey_400 rounded-lg w-almost_half py-10 space-y-10">
          <div className="flex justify-between px-10">
            <div className="flex space-x-4 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="44px" viewBox="0 0 24 24" width="44px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.93,0,3.5,1.57,3.5,3.5S13.93,13,12,13 s-3.5-1.57-3.5-3.5S10.07,6,12,6z M12,20c-2.03,0-4.43-0.82-6.14-2.88C7.55,15.8,9.68,15,12,15s4.45,0.8,6.14,2.12 C16.43,19.18,14.03,20,12,20z"/></g></svg>
              <div>
                <h4 className="text-3xl font-semibold text-grey_600">Bobby Boberton</h4>
                <h5 className="text-2xl font-light text-grey_400">Community Review</h5>
              </div>
            </div>
            <div className="justify-items-end">
              <div className="flex space-x-2 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="font-light text-2xl text-light_grey 200 text-right">28 August 2022</p>
            </div>
          </div>
          <p className="px-10 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum metus, eu gravida nibh. Morbi blandit quam ex, quis mollis odio elementum eu. In condimentum ligula sit amet lacinia vehicula. Integer dapibus libero eget sapien ultricies sodales.
          </p>
        </div>
        <div className="shadow-md shadow-grey_400 rounded-lg w-almost_half py-10 space-y-10">
          <div className="flex justify-between px-10">
            <div className="flex space-x-4 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="44px" viewBox="0 0 24 24" width="44px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,6c1.93,0,3.5,1.57,3.5,3.5S13.93,13,12,13 s-3.5-1.57-3.5-3.5S10.07,6,12,6z M12,20c-2.03,0-4.43-0.82-6.14-2.88C7.55,15.8,9.68,15,12,15s4.45,0.8,6.14,2.12 C16.43,19.18,14.03,20,12,20z"/></g></svg>
              <div>
                <h4 className="text-3xl font-semibold text-grey_600">Bobby Boberton</h4>
                <h5 className="text-2xl font-light text-grey_400">Community Review</h5>
              </div>
            </div>
            <div className="justify-items-end">
              <div className="flex space-x-2 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="font-light text-2xl text-light_grey 200 text-right">28 August 2022</p>
            </div>
          </div>
          <p className="px-10 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum metus, eu gravida nibh. Morbi blandit quam ex, quis mollis odio elementum eu. In condimentum ligula sit amet lacinia vehicula. Integer dapibus libero eget sapien ultricies sodales.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const serviceIds = await axios.get('https://api.gsserviceexchange.online/api/Service/AllId', {
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

  const paths = serviceIds.map(serviceId => {
    return {
      params: {
        id: String(serviceId)
      }
    }
  })
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const serviceData = await axios.get('https://api.gsserviceexchange.online/api/service/' + params.id, {
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