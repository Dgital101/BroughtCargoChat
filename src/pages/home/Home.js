import React from 'react'

const Home = () => {
  return (
    <main>
      <section 
        className='bg-[#E5DBD3] flex flex-col md:flex-row-reverse w-full items-center justify-center py-6 px-2'
        >
        <section className='flex flex-col items-center justify-center w-full'>
          <h1 className='flex flex-col justify-center items-center text-2xl lg:text-4xl lg:gap-x-4 font-bold'>
            <span>Bulk Goods Delivered to You</span>
           <span> at Wholesale Prices !</span>
          </h1>
          <p className='flex flex-col justify-center items-center text-lg lg:text-2xl font-normal my-2'>
            <span>Join other retailers near You</span>
           <span> and enjoy discounted wholesale prices </span>
          </p>
          <button className='bg-[#FED034] rounded-full px-2 py-1 lg:text-2xl lg:w-48 lg:h-12 mt-2 lg:mt-6'>
            Get Started
          </button>
        </section>
        <img
          src='/assets/images/home/groceries.png'
          alt='bulk groceries'
          className='md:w-1/2 lg:w-2/3 lg:h-96 lg:ml-auto'
        />
      </section>
    </main>
  )
}

export default Home