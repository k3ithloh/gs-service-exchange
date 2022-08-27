import Link from 'next/link';

const renderRating = (rating) => {
  return (
    <>
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFB75D"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>
      <div className="flex gap-x-1">
        <p className="font-semibold text-xl">5</p>
        <p className="text-grey_600 text-xl">(15)</p>
      </div>
    </>
  )
}

export default function productCard() {
  return (
    <div className="shadow-md shadow-grey_400 mix-blend-difference bg-blend-multiply rounded-lg p-10 w-almost_half space-y-10 my-10">
        <div className='space-y-4'>
          <div className="flex gap-x-4 place-content-center justify-start">
            <h3 className="font-semibold text-2xl">Buy Now Pay Later</h3>
            <div className="rounded-3xl bg-green text-white py-1 px-4 place-content-center">
              NEW
            </div>
          </div>
          <div className="flex gap-4">
            {renderRating()}
          </div>
        </div>
        <p className="font-light text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dictum metus, eu gravida nibh. Morbi blandit quam ex, quis mollis odio elementum eu. In condimentum ligula sit amet lacinia vehicula.
        </p>
        <div className='flex justify-end'>
          <Link href="/">
            <button className="w-2/5 rounded-xl bg-blue py-3 font-semibold text-white hover:bg-dark_blue text-lg">
              See More
            </button>
          </Link>
        </div>
    </div>
  )
}