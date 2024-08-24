import React from 'react'
import "./productcard.css";
import { useNavigate } from 'react-router-dom';
function ProductCard({product}) {
    const navigate = useNavigate();
  return (
    <div onClick={ () => navigate(`/product/${product._id}`)} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
        <div className='h-[15rem]'>
            <img alt="" className='h-full w-full object-cover object-left-top' src={product.imageUrl} />
        </div>
        <div className='textPart bg-white p-3 '>
            <div className=''>
                <p className='font-bold text-gray-900 opacity-70'>{product.brand}</p>
                <p className=' text-sm text-gray-800'>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='mt-2 text-sm text-gray-800 font-semibold'>&#8377;{product.discountedPrice}</p>
                <p className='mt-2 text-sm text-gray-800 font-semibold line-through opacity-50'>&#8377;{product.price}</p>
                <p className='mt-2 text-sm text-green-600 font-semibold'>{product.discountedPercent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard