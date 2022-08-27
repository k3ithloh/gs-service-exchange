import Image from 'next/image';
import ProductCard from './productCard';

export default function BankingServices({ bankingData }) {
  return (
    <div className="mx-44 py-20 space-y-10">
      <h2 className="text-4xl text-dark_blue font-bold">Banking Services</h2>
      <div className='flex flex-wrap gap-x-4 justify-between'>
        {bankingData.map((banking_service) => {
          if (banking_service.category === "Banking Services") {
          return (
            ProductCard(banking_service)
          )
        }})}
      </div>
    </div>
  )
}