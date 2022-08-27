import Image from 'next/image';
import ProductCard from './productCard';

function Products({ productData }) {
  return (
    <div className="mx-44 py-20 space-y-10">
      <h2 className="text-4xl text-dark_blue font-bold">Products and Platforms</h2>
      <div className='absolute mx-44 w-1/4 h-2/5'>
        <Image alt="products" src="/images/products.svg" layout="fill"/>
      </div>
      <div className='flex flex-wrap gap-x-4 justify-between'>
        {/* <div className='absolute my-24 bg-grey_100 w-screen h-32 z-0 rounded-lg'></div> */}
        {/* <div className="flex w-1/2 place-content-center"> */}
        {/* </div> */}
        <div className="p-10 w-2/5 space-y-4"></div>
        {productData.map((product) => {
          if (product.category === "Products and Platforms") {
          return (
            ProductCard(product)
          )
        }})}
      </div>
      
    </div>
  )
}

export default Products;