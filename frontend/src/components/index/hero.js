import Image from 'next/image';

const categories = [
  {
    name: "Products",
  },
  {
    name: "Institutional",
  },
  {
    name: "Banking",
  },
];

const renderCategories = categories.map((category, index) => {
    return (
      <button className="w-72 rounded-xl bg-blue p-3 font-semibold text-white hover:bg-dark_blue text-3xl" key={index}>
          {category.name}
      </button>
    );
  });

export default function Hero() {
  return (
    <div className="flex my-16 mx-44 h-100 items-end">
      <div className="w-3/5 my-8 space-y-14">
        <h1 className="text-5xl text-dark_blue font-bold">Services At a Glance</h1>
        <p className="w-4/5 font-light text-2xl">
          Incorporate the full range of Goldman Sachs services within your
          own applications and processes to drive efficiency, architect for
          scale, and create new business lines by leveraging our scale and
          market coverage.
        </p>
        <div className="space-x-4">
          {renderCategories}
        </div>
      </div>
      <div className='relative w-1/2 h-96 justify-end place-self-end'>
        <Image alt="hero" src="/images/hero.svg" layout='fill' objectFit='cover'></Image>
      </div>
    </div>
  )
}