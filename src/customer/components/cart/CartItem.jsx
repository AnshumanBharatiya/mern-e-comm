import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md '>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top ' src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg' alt='image1'/>
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold '>Men Solid Pure Cotton Straight Kurta </p>
                <p className='opacity-50 mt-2'>Size: L, White </p>
                <p className='opacity-50 mt-2'>Seller: Somak Sundar SKD </p>

                <div className='flex space-x-5 items-center text-gray-900 pt-6 '>
                    <p className="opacity-50 line-through">&#8377;200</p>
                    <p className="font-semibold">&#8377;190</p>
                    <p className="text-green-600 font-semibold">5% off</p>
                </div>
            </div>
        </div>

        <div className='lg:flex items-center lg:space-x-10 pt-4 '>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-6 border rounded-sm '>3</span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <AddCircleOutlineIcon/>
                </IconButton>

                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>

            </div>

           
        </div>

    </div>
  )
}

export default CartItem