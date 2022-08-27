import Navbar from "../components/index/navbar";
import Hero from "../components/index/hero";
import Products from "../components/index/products";
import InstitutionalServices from "../components/index/institutionalServices";
import BankingServices from "../components/index/bankingServices";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="divide-y divide-solid divide-grey_200">
        <Hero/>
        <Products/>
        <InstitutionalServices/>
        <BankingServices/>
      </div>
    </>
  )
}
