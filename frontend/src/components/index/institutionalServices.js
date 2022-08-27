import Image from 'next/image';
import ProductCard from './productCard';

export default function InstitutionalServices({ institutionalData }) {
  return (
    <div className="mx-44 py-20 space-y-10">
      <h2 className="text-4xl text-dark_blue font-bold">Institutional Services</h2>
      <div className='absolute mx-44 w-1/4 h-2/5'>
        <Image alt="products" src="/images/institutional_services.svg" layout="fill"/>
      </div>
      <div className='flex flex-wrap gap-x-4 justify-between'>
        <div className="p-10 w-2/5 space-y-4"></div>
        {institutionalData.map((institutional_service) => {
          if (institutional_service.category === "Institutional Services") {
          return (
            ProductCard(institutional_service)
          )
        }})}
      </div>
      
    </div>
  )
}