import Navbar from "../../../components/index/navbar";
import FinancialData from "../../../components/Financial-data/FinancialData";
import Link from "next/link";
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

return {
  props: {
    marketplaceData
  }, // will be passed to the page component as props
}
}

const index = ({marketplaceData}) => {
  return (
    <div>
      <Navbar />
      <h1 className="mt-5 text-2xl container mx-auto px-4 w-full">Financial Data Service</h1>
      <div className="text-lg flex container mx-auto px-4 w-full justify-center my-5 border-b">
        <div className="mr-5">
          <div className="" style={{cursor: 'pointer'}}>
            <Link href="/financial-data/overview">Overview</Link>
          </div>
        </div>
        <div className="ml-5">
          <div className="border-b-white hover:border-b-grey-500" style={{cursor: 'pointer'}}>
            <Link href="/financial-data/documentation">Documentation</Link>
          </div>
        </div>
      </div>
      <div className="flex">
        <FinancialData marketplaceData={marketplaceData}/>
      </div>
    </div>
  );
};

export default index;
