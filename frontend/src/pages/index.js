import Navbar from "../components/index/navbar";
import Footer from "../components/index/footer";
import Hero from "../components/index/hero";
import Products from "../components/index/products";
import InstitutionalServices from "../components/index/institutionalServices";
import BankingServices from "../components/index/bankingServices";
import axios from 'axios';

export async function getServerSideProps() {
  const marketplaceData = await axios.get('https://api.gsserviceexchange.online/api/service', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    }
  }).then(res => {
      console.log(res.data)
      return res.data;
    }).catch(err => {
      console.log(err);
    }
  );

  return {
    props: {
      marketplaceData
      // marketplaceData: [],
    }, // will be passed to the page component as props
  }
}

export default function Home({ marketplaceData }) {
  console.log(marketplaceData)
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="divide-y divide-solid divide-grey_200">
        <Hero/>
        <Products productData={marketplaceData}/>
        <InstitutionalServices institutionalData={marketplaceData}/>
        <BankingServices bankingData={marketplaceData}/>
      </div>
      <Footer/>
    </div>
  )
}