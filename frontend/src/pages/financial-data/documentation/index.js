import React, {useState} from 'react'
import { DocumentationRow } from '../../../components/Financial-data/DocumentationRow';
import Link from 'next/link';
import Navbar from '../../../components/index/navbar';

const index = () => {

  const [api, setApi] = useState(['lalala', 'aalflafe', 'afiehifwf']);

  return (
    <div>
      <Navbar />
      <div class="text-lg flex container mx-auto px-4 w-full justify-center my-5 border-b">
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