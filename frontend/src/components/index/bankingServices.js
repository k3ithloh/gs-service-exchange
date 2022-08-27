import Image from 'next/image';
import ProductCard from './productCard';

export default function InstitutionalServices() {
  return (
    <div className="mx-44 py-20 space-y-10">
      <h2 className="text-4xl text-dark_blue font-bold">Banking Services</h2>
      <div className='flex flex-wrap gap-x-4 justify-between'>
        {/* <div className='absolute my-24 bg-grey_100 w-screen h-32 z-0 rounded-lg'></div> */}
        {/* <div className="flex w-1/2 place-content-center"> */}
        {/* </div> */}
        <ProductCard/>
        <ProductCard/>
      </div>
      
    </div>
  )
}