import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' alt='' src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/f/c/xxl-gt-4-dyrectdeals-original-imagmg9wa2f63zwz.jpeg?q=70'/>

        </div>
        <div className='p-4 '>
            <h3 className='text-lg font-medium'>dyrectdeals</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Colorblock Polo Neck Poly Cotton Pink T-Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard