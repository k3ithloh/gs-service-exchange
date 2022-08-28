import React, {useState} from 'react'
import { DocumentationRow } from '../../../components/Financial-data/DocumentationRow';
import Link from 'next/link';
import Navbar from '../../../components/index/navbar';

const index = () => {

  const [api, setApi] = useState(['lalala', 'aalflafe', 'afiehifwf']);

  return (
    <div>
      <Navbar />
      <h1 className="mt-5 text-2xl container mx-auto px-4 w-full">Financial Data Service Documentation</h1>
      <div className="flex justify-center">
        <div className="mx-44 flex flex-col pt-10 w-1/5 items-center content-center self-center space-y-4">
            <h3 className="font-semibold text-dark_blue text-center text-2xl"><Link href="/financial-data/overview">Overview</Link></h3>
        </div>
        <div className="mx-44 flex flex-col pt-10 w-1/5 items-center content-center self-center space-y-4">
            <h3 className="font-semibold text-dark_blue text-center text-2xl"><Link href="/financial-data/documentation">Documentation</Link></h3>
            <a className="bg-dark_blue w-56 h-1 border-dark_blue border flex-grow"></a>
        </div>
      </div>
      <div className="absolute border-grey_200 border w-4/5 mx-44">
      </div>
      <div>
        <div className='flex flex-col justify-center mx-auto'>
          {
            api.map((data, key)=>{
              return (<DocumentationRow key={key} data={data} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default index