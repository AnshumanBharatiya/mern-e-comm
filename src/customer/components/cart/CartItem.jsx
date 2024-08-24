import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../state/Cart/Action'


function CartItem({cart_item}) {
    const dispatch = useDispatch();

    const handleUpdateCartItem = (num) => {
        const data = {data:{quantity:cart_item.quantity+num}, cartItemId: cart_item?._id}
        dispatch(updateCartItem(data));
    }

    const handleRemoveCartItem = () => {
        const data = {cartItemId: cart_item?._id}
        dispatch(removeCartItem(data));
    }


    return (
        <div className='p-5 shadow-lg border rounded-md '>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top ' src={cart_item.product.imageUrl} alt='image1'/>
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold '>{cart_item.product.title}</p>
                    <p className='opacity-50 mt-2'>Size: {cart_item.size}, {cart_item.product.color} </p>
                    <p className='opacity-50 mt-2'>Seller: {cart_item.product.brand} </p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6 '>
                        <p className="opacity-50 line-through">&#8377;{cart_item.price}</p>
                        <p className="font-semibold">&#8377;{cart_item.discountedPrice}</p>
                        <p className="text-green-600 font-semibold">{cart_item.product.discountedPercent}% off</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4 '>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"RGB(145 85 253)"}} onClick={() => handleUpdateCartItem(-1)} disabled={cart_item.quantity <= 1 }>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-6 border rounded-sm '>{cart_item.quantity}</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}} onClick={() => handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon/>
                    </IconButton>

                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}} onClick={handleRemoveCartItem}>Remove</Button>
                    </div>

                </div>

            
            </div>

        </div>
    )
}

export default CartItem