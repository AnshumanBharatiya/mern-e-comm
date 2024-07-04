
import React from 'react'

function HomeSectionCard({ product }) {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 pt-4 border '>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' alt='' src={product.imageUrl} />
            </div>
            <div className='p-4 '>
                <h3 className='text-lg font-medium text-gray-900'>{product.brand} </h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title} </p>
                <p className='mt-2 text-sm text-gray-800 font-bold'>&#8377;{product.discountedPrice}</p>
                <p className='mt-2 text-sm text-gray-800 font-bold'><s>&#8377;{product.price} </s>  &nbsp;{product.discountPersent}%off</p>
            </div>
        </div>
    )
}

export default HomeSectionCard;