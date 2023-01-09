import React from 'react'

const Home = () => {
  return (
    <main>
      <section className='bg-[#E5DBD3] flex flex-col w-full items-center justify-center py-6 px-2'>
        <section className='flex flex-col items-center justify-center w-full'>
          <h1 className='flex flex-col justify-center items-center text-2xl font-bold'>
            <span>Bulk Goods Delivered to You</span>
           <span> at Wholesale Prices !</span>
          </h1>
          <p className='flex flex-col justify-center items-center text-lg font-normal my-2'>
            <span>Join other retailers near You</span>
           <span> and enjoy discounted wholesale prices </span>
          </p>
          <button className='bg-[#FED034] rounded-full px-2 py-1'>
            Get Started
          </button>
        </section>
        <img
          src='/assets/images/home/groceries.png'
          alt='bulk groceries'
          className=''
        />
      </section>
    </main>
  )
}

export default Home