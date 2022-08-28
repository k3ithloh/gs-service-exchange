import Navbar from "../../../components/index/navbar";
import Footer from "../../../components/index/footer";
import FinancialData from "../../../components/Financial-data/FinancialData";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';

export async function getStaticProps() {
  const marketplaceData = await axios.get('https://api.gsserviceexchange.online/api/Customer/getStocks/string', {
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
    marketplaceData,
    serviceData,
  }, // will be passed to the page component as props
}
}

const index = ({marketplaceData, serviceData}) => {
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
              <h3 className="font-semibold text-dark_blue text-center text-3xl">Overview</h3>
              <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
          </button>
        </Link>
        <Link href="/financial-data/documentation">
          <button className="flex flex-col w-1/5 items-center content-center self-center space-y-4">
              <h3 className="text-grey_400 text-center text-3xl">Documentation</h3>
              <a className="w-56 h-1 border-transparent border flex-grow"></a>
          </button>
        </Link>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44"></div>
      <div className="flex space-y-10 my-20">
        <FinancialData marketplaceData={marketplaceData}/>
      </div>
      <Footer/>
    </div>
  );
};

export default index;
