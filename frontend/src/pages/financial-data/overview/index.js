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
      <div className="flex justify-center">
        <div className="mx-44 flex flex-col pt-10 w-1/5 items-center content-center self-center space-y-2">
            <h3 className="font-semibold text-dark_blue text-center text-2xl"><Link href="/financial-data/overview">Overview</Link></h3>
            <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
        </div>
        <div className="mx-44 flex flex-col pt-10 w-1/5 items-center content-center self-center space-y-4">
            <h3 className="font-semibold text-dark_blue text-center text-2xl"><Link href="/financial-data/documentation">Documentation</Link></h3>
        </div>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44">
      </div>
      <div className="flex">
        <FinancialData marketplaceData={marketplaceData}/>
      </div>
    </div>
  );
};

export default index;
