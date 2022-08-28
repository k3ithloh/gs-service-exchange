import Navbar from "../../../components/index/navbar";
import Footer from "../../../components/index/footer";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Line, Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

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
    <>
      <Navbar/>
      {hero(serviceData)}
      <div className="flex justify-center mx-44 mt-10">
        <Link href="/bnpl/overview">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
              <h3 className="font-semibold text-dark_blue text-center text-3xl">Overview</h3>
              <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
          </button>
        </Link>
        <Link href="/bnpl/documentation">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
              <h3 className="text-grey_400 text-center text-3xl">Documentation</h3>
              <a className="w-56 h-1 border-transparent border flex-grow"></a>
          </button>
        </Link>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44"></div>
      <div className="ml-44 mr-44 2xl:mr-56 2xl:pr-6 my-10 justify-between grid grid-rows-8 grid-cols-5 gap-4">
        <div className="col-span-2 row-span-2 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start">
          <h4 className="text-semibold text-2xl">No. Users Over Time</h4>
          <div className="border-grey_200 border"></div>
          <Line
            datasetIdKey='id'
            data={{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
              ],
              datasets: [
                {
                  label: 'No. Users Over Time',
                  backgroundColor: 'rgba(255,99,132)',
                  borderColor: 'rgba(255,99,132)',
                  data: [20, 22, 18, 33, 44, 55, 66, 77],
                }
              ],
            }}
          />
        </div>
        <div className="col-span-2 row-span-2 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start">
          <h4 className="text-semibold text-2xl">No. Transactions Over Time</h4>
          <div className="border-grey_200 border"></div>
          <Line
            datasetIdKey='id'
            data={{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
              ],
              datasets: [
                {
                  label: 'No. Transactions Over Time',
                  backgroundColor: 'rgba(255,99,132)',
                  borderColor: 'rgba(255,99,132)',
                  data: [20, 22, 18, 33, 25, 55, 34, 77],
                }
              ],
            }}
          />
        </div>
        {/* <div className="flex flex-col w-3/12 justify-between"> */}
          <div className="col-span-1 row-span-1 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start text-center">
            <h4 className="text-semibold text-2xl">Outstanding Loans</h4>
            <div className="border-grey_200 border"></div>
            <p className="text-4xl font-light">29.920 Rp</p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start text-center">
            <h4 className="text-semibold text-2xl">Total Loans</h4>
            <div className="border-grey_200 border"></div>
            <p className="text-4xl font-light">579.920 Rp</p>
          </div>
          <div className="col-span-2 row-span-4 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start">
            <h4 className="text-semibold text-2xl">Avg Payback Rate</h4>
            <div className="border-grey_200 border"></div>
            <Pie
              datasetIdKey='id'
              data={{
                labels: [
                  'Fully Repaid',
                  'Currently Repaying',
                  'Defaulted',
                ],
                datasets: [
                  {
                    label: 'Average Payback Rate',
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                    ],
                    data: [181, 63, 40],
                  }
                ],
              }}
            />
          </div>
          <div className="col-span-3 row-span-4 flex flex-col shadow-md shadow-grey_400 rounded-lg py-10 px-10 space-y-4 justify-start">
            <h4 className="text-semibold text-2xl">Missed Payments Over Time</h4>
            <div className="border-grey_200 border"></div>
            <Bar
              datasetIdKey='id'
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                ],
                datasets: [
                  {
                    label: 'Missed Over Time',
                    backgroundColor: 'rgba(255,99,132)',
                    borderColor: 'rgba(255,99,132)',
                    data: [20, 22, 18, 33, 25, 55, 34, 77],
                  }
                ],
              }}
            />
          </div>
      </div>
      <Footer/>
    </>
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